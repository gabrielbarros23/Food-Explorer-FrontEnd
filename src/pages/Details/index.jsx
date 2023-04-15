import { Container, Content, Left, Right, IngredientsArea, Amount, Submit, Title } from './style'
import { Footer, Header, Button, BackButton } from '../../components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


export function Details() {
   const { user, CartClass } = useAuth()
   const isAdmin = Boolean(user.admin)
   const params = useParams()
   const navigate = useNavigate()

   const [dish, setDish] = useState(null)
   const [ingredients, setIngredients] = useState([])
   const [dishImage, setDishImage] = useState()
   const [count, setCount] = useState(1)
   const [buttonContext, setButtonContext] = useState('')
   const cart = new CartClass

   

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

   async function handleButtonFLow(){
      if (isAdmin) {
        return navigate(`/edit/${params.id}`)
      }
      await cart.addItemToCart({dish_id:dish.id, quantity:count})
      
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
   }, [params])
   return (
      <Container>

         <Header />
         {dish && dishImage &&
            <Content>
               <Left>

                 <BackButton onClick={handleBack}/>

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

                     <Button title={buttonContext} onClick={() => handleButtonFLow()} />

                  </Submit>

               </Right>

            </Content>
         }

         <Footer />
      </Container>
   )
}