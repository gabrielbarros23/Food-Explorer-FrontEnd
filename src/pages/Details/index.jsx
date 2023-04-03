import { Container, Content, Left, Right, IngredientsArea, Amount, Submit, Title } from './style'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { RxCaretLeft } from 'react-icons/rx'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Footer, Header, Button } from '../../components'


export function Details() {
   const { user } = useAuth()
   const isAdmin = Boolean(user.admin)
   const params = useParams()
   const navigate = useNavigate()

   const [dish, setDish] = useState(null)
   const [ingredients, setIngredients] = useState([])
   const [dishImage, setDishImage] = useState()
   const [count, setCount] = useState(1)
   const [buttonContext, setButtonContext] = useState('')

   function handleEdit() {
      if (isAdmin) {
         navigate(`/edit/${params.id}`)
      }
   }

   function handleBack() {
      navigate(-1)
   }

   function HandleCount(val) {
      let numberUpdated = val + count

      setCount(numberUpdated)
      if (numberUpdated <= 0) {
         return setCount(1)
      }

      const context = Boolean(user.admin) ? 'Editar prato' : `incluir ∙ R$ ${(numberUpdated * dish.price).toFixed(2)}`
      setButtonContext(context)

   }

   useEffect(() => {
      async function DishSetup() {
         const dish = await api.get(`/dishes/${params.id}`).then(response => response.data)
         setDish(dish)

         const DataIngredients = await api.get(`/ingredient/${params.id}`).then(response => response.data)

         const ingredients = DataIngredients.map((data) => {
            return data.ingredient
         })
         setIngredients(ingredients)

         const image = `${api.defaults.baseURL}/files/${dish.image}`
         setDishImage(image)

         const context = Boolean(user.admin) ? 'Editar prato' : `incluir ∙ R$ ${dish.price}`
         setButtonContext(context)
      }

      DishSetup()
   }, [])
   return (
      <Container>

         <Header />
         {dish && dishImage &&
            <Content>
               <Left>

                  <button onClick={handleBack}>
                     <RxCaretLeft />
                     <p>voltar</p>
                  </button>

                  <img src={dishImage} alt={dish.title} />

               </Left>

               <Right>

                  <Title>
                     <h1>{dish.title}</h1>

                     <p>{dish.description}</p>
                  </Title>


                  <IngredientsArea>

                     {ingredients.map((ingredient, index) => (
                        <li key={index}>
                           <ul>{ingredient}</ul>
                        </li>
                     ))}

                  </IngredientsArea>

                  <Submit >

                     <Amount isAdmin={isAdmin}>

                        <button onClick={() => HandleCount(-1)}><AiOutlineMinus /></button>
                        <span>{count}</span>
                        <button onClick={() => HandleCount(1)}><AiOutlinePlus /></button>

                     </Amount>

                     <Button title={buttonContext} onClick={() => handleEdit()} />

                  </Submit>

               </Right>

            </Content>
         }

         <Footer />
      </Container>
   )
}