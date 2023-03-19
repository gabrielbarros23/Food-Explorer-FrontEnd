import {Container, Content, Left, Right, IngredientsArea, Amount, Submit, Title} from './style'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {RxCaretLeft} from 'react-icons/rx'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'




export function Details(){
    const {user} = useAuth()
    const isAdmin = Boolean(user.admin)
    const params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [dishImage, setDishImage] = useState() 
    const [count, setCount] = useState(1)
    const [buttonContext, setButtonContext] = useState('') 
    
    function handleEdit() {
        if(Boolean(user.admin)){
            navigate(`/edit/${params.id}`)
        }
    }

    function HandleCount(val){
        let numberUpdated = val + count

        if(numberUpdated <= 0){
            numberUpdated = 1
        }

        setCount(numberUpdated)
    }

    useEffect(() => {
        async function DataSetup(){
            const dish = await api.get(`/dishes/${params.id}`)
            const data = dish.data
            setData(data)
            
            const ShowIngredient = await api.get(`/ingredient/${params.id}`)
            const DataIngredients = ShowIngredient.data
            
            const ingredients = DataIngredients.map((data) => {
                return data.ingredient
            })
            setIngredients(ingredients)

            const image = `${api.defaults.baseURL}/files/${data.image}`
            setDishImage(image)

            const context = Boolean(user.admin)? 'Editar prato' : `incluir ∙ R$ ${data.price}`
            setButtonContext(context)
        }
        DataSetup()
    }, [])
    return(
        <Container>

            <Header/>

           {data &&  dishImage &&
            <Content>
                <Left>

                    <Link to='/'>
                        <RxCaretLeft/>
                        <p>voltar</p>
                    </Link>

                    <img src={dishImage} alt={data.title} />

                </Left>

                <Right>

                    <Title>
                        <h1>{data.title}</h1>

                        <p>{data.description}</p>
                    </Title>


                    <IngredientsArea>

                        {ingredients.map((ingredient) => (
                            <li key={ingredient}>
                               <ul>{ingredient}</ul>
                            </li>
                        ))}

                    </IngredientsArea>

                    <Submit >
                        
                        <Amount  isAdmin={isAdmin}>

                            <button onClick={() =>HandleCount(-1)}><AiOutlineMinus/></button>
                            <span>{count}</span>
                            <button onClick={() =>HandleCount(1)}><AiOutlinePlus/></button>

                        </Amount>

                        <Button title={buttonContext} onClick={() => handleEdit()}/>

                    </Submit>
                    
                </Right>

            </Content>}

            <Footer/>
        </Container>
    )
}