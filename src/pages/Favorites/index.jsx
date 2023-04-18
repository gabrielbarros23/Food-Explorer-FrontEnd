import { Container, Content } from './style'
import { Header, Footer, DishesFavorites, BackButton } from '../../components'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import { HiEmojiSad } from 'react-icons/hi'


export function Favorites() {
    const { FavoritesClass } = useAuth()
    const favorites = new FavoritesClass

    const [dishes, setDishes] = useState([])
    const [updateFavoritesTrigger, setUpdateFavoritesTrigger] = useState(1)

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleGetFavorites() {

        const userFavoritesDishes = await favorites.GetFavoritesByUserId().then(response => response.data)

        const dish_id = userFavoritesDishes.map(favorite => favorite.dish_id)

        const dishesPromise = dish_id.map(id => api.get(`/dishes/${id}`))

        const dishes = await Promise.all(dishesPromise).then(response => response.map(response => response.data))

        setDishes(dishes)
    }

    const handleRemoveFavorite = async (dish_id) => {
        const userFavoritesDishes = await favorites.GetFavoritesByUserId().then((response) => response.data)
        const Dish = userFavoritesDishes.find(favorite => favorite.dish_id === dish_id)

        await favorites.DeleteFavorites(Dish.id)
        setUpdateFavoritesTrigger(prevState => prevState + 1)
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

                {dishes.length == 0 ?

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