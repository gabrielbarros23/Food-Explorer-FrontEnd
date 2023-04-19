import { Container, Content } from './style'
import { Header, Footer, DishesFavorites, BackButton } from '../../components'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiEmojiSad } from 'react-icons/hi'
import { Ring } from '@uiball/loaders'


export function Favorites() {
    const { FavoritesClass } = useAuth()
    const favorites = new FavoritesClass

    const [dishes, setDishes] = useState([])
    const [updateFavoritesTrigger, setUpdateFavoritesTrigger] = useState(1)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleGetFavorites() {
        try{

            const userFavoritesDishes = await favorites.GetFavoritesByUserId().then(response => response.data)
    
            const dish_id = userFavoritesDishes.map(favorite => favorite.dish_id)
    
            const dishesPromise = dish_id.map(id => api.get(`/dishes/${id}`))
    
            const dishes = await Promise.all(dishesPromise).then(response => response.map(response => response.data))
    
            setDishes(dishes)
            setLoading(false)
        }catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível buscar os favoritos')
            }
        }

    }

    const handleRemoveFavorite = async (dish_id) => {
        try{
            const userFavoritesDishes = await favorites.GetFavoritesByUserId().then((response) => response.data)
            const Dish = userFavoritesDishes.find(favorite => favorite.dish_id === dish_id)
    
            await favorites.DeleteFavorites(Dish.id)
            setUpdateFavoritesTrigger(prevState => prevState + 1)
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Não foi possível remover o prato dos favoritos')
            }
        }
    }

    useEffect(() => {
        handleGetFavorites()
    }, [updateFavoritesTrigger])


    return (
        <Container>
            <Header />

            <Content>
                <BackButton onClick={handleBack}/>
                <h1>Meus Favoritos</h1>

                {
                loading ?
                    <Ring
                    size={60}
                    lineWeight={5}
                    speed={2}
                    color="white"
                    />
                :
                dishes.length == 0 ? 
                    <h2>Nenhum prato favorito <HiEmojiSad /></h2>
                :
                    <li>
                        {dishes && dishes.map((dish) => (
                            <DishesFavorites dish={dish} key={dish.id} removeFunction={handleRemoveFavorite} />
                        ))}
                    </li>
                }



            </Content>

            <Footer />
        </Container>
    )
}