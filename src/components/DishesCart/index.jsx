import {Container} from './style'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function DishesCart({dish}){
  const [dishData, setDishData] = useState({})
  const [dishImage, setDishImage] = useState()
  
  const navigate = useNavigate()

  const {CartClass} = useAuth()
  const cartFunction = new CartClass 

  function handleDetails(){
    navigate(`/details/${dish.dish_id}`)
  }
  
  useEffect(() => {
    async function handleDish(){
      const dishData = await api.get(`dishes/${dish.dish_id}`).then(response => response.data)
      setDishData(dishData)
      const image = `${api.defaults.baseURL}/files/${dishData.image}`
      setDishImage(image)
    }
    handleDish()
  }, [])

  return(
    <Container>

      <div className="image">
        <img src={dishImage} alt={dishData.title} onClick={handleDetails} />
      </div>

      <div className="text">

        <h2  onClick={handleDetails} >{dishData.title} <span>{'R$ ' +dishData.price}</span></h2>
        <span onClick={() => cartFunction.handleDeleteItem(dish.id)}>Remover dos Favoritos</span>
        
      </div>

    </Container>
  )
}