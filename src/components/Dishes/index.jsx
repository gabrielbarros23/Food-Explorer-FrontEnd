import { Container, Image, Amount, Market } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../Button'
import { BsPencil } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useEffect } from 'react'

export function Dishes({ data, ...rest }) {
   const { user, FavoritesClass, CartClass } = useAuth()
   const favorites = new FavoritesClass
   const cart = new CartClass 
   const Admin = Boolean(user.admin)
   

   const [quantity, setQuantity] = useState(1)
   const [shakeAnimation, setShakeAnimation] = useState(false)

   const [icon, setIcon] = useState(<AiOutlineStar />)
   const [iconSetupTrigger, setIconSetupTrigger] = useState(1)

   const navigate = useNavigate()

   const dishImage = `${api.defaults.baseURL}/files/${data.image}`
   const ButtonContext = Admin ? 'Detalhes' : 'Incluir'

   function HandleQuantity(val) {

      const updated = val + quantity
      updated <= 0 ? setQuantity(1) : setQuantity(updated)

   }

   function handleDetails(id) {
      navigate(`/details/${id}`)
   }

   async function handleAddItemToCart({dish_id, quantity}){
      await cart.addItemToCart({dish_id, quantity})
      setShakeAnimation(true)
      setTimeout(() => {
         setShakeAnimation(false)
      }, 1000);
   }

   

   async function handleIconFunction() {

      if (Admin) {
         return navigate(`/edit/${data.id}`)
      }

      const userFavorites = await favorites.GetFavoritesByUserId().then((response) => response.data)

      const dishFavoriteId = userFavorites.find(favorites => favorites.dish_id === data.id)

      if (dishFavoriteId) {
         await favorites.DeleteFavorites(dishFavoriteId.id)
         return setIconSetupTrigger(prevState => prevState + 1)
      }

      const dish_id = data.id
      const dish_title = data.title

      await favorites.CreateFavorites(dish_id, dish_title)
      setIconSetupTrigger(prevState => prevState + 1)
   }


   useEffect(() => {
      async function IconSetup() {
         if (Admin) {
            return setIcon(<BsPencil />)
         }

         const userFavorites = await favorites.GetFavoritesByUserId().then(response => response.data)

         const favorite = userFavorites.find(favorite => favorite.dish_id == data.id)

         setIcon(favorite ? <AiFillStar style={{ color: 'yellow' }} /> : <AiOutlineStar />)
      }
      IconSetup()
   }, [iconSetupTrigger])

   return (
      <Container isAdmin={Admin} shakeAnimation={shakeAnimation} {...rest}>

         <Image isAdmin={Admin}>

            <button onClick={() => handleIconFunction()}>
               {icon}
            </button>

            <img
               src={dishImage}
               alt={data.title}
               onClick={() => handleDetails(data.id)}
            />

         </Image>

         <h1 onClick={() => handleDetails(data.id)}>{data.title}</h1>

         <p onClick={() => handleDetails(data.id)}>{data.description}</p>

         <p onClick={() => handleDetails(data.id)}>{'R$ ' + data.price}</p>

         <Market isAdmin={Admin}>

            <Amount isAdmin={Admin}>
               <button onClick={() => HandleQuantity(-1)}><AiOutlineMinus /></button>
               <p>{quantity}</p>
               <button onClick={() => HandleQuantity(1)}><AiOutlinePlus /></button>
            </Amount>

            <Button title={ButtonContext} onClick={() => handleAddItemToCart({dish_id:data.id, quantity}).then(setQuantity(1))} />
         </Market>


      </Container>
   )
}