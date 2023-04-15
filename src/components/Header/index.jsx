import { Container, Logo, Text, AlternativeInput, Dropdown, LeaveIcon, Search, Dish } from './style'
import { api } from '../../services/api'
import { useState, useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { FcMenu } from 'react-icons/fc'
import { BsReceiptCutoff } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import { Button } from '../Button'
import logo from '../../assets/Polygon blue.svg'
import SingOut from '../../assets/SingOut.svg'


export const Header = memo(
   function Header({}) {
      const { user, singOut, triggerToUpdateCartIcon } = useAuth()
   
      const [search, setSearch] = useState('')
      const [dish, setDish] = useState([])
      const [searchSelected, setSearchSelected] = useState(false);
      const [cart, setCart] = useState(null) 
   
      const navigate = useNavigate()
      const isAdmin = Boolean(user.admin)
   
      function handleSearchFocus() {
         setSearchSelected(true);
      }
   
      function handleSearchBlur() {
         setTimeout(() => {
            setSearchSelected(false);
         }, 100)
      }
   
      function handleNavigate(route) {
         if(route == '/singOut'){
            singOut()
            return navigate('/')
         }

         navigate(route)
      }
   
   
      function handleImage(url) {
         const dishImage = `${api.defaults.baseURL}/files/${url}`
         return dishImage
      }
   
      useEffect(() => {
         async function fetchDishes() {
            const dish = await api.get(`/dishes?search=${search}`).then(response => response.data)
            setDish(dish)
         }
         fetchDishes()
      }, [search])

      useEffect(() => { 
         async function getCartByUserId(){
            try{
              const cart = await api.get('/carts').then(response => response.data)
              
              setCart(cart)
      
            }catch (error) {
              if (error.response) {
                throw alert(error.response.data.message)
              } else {
                throw alert('Não foi possível buscar o item do carrinho')
              }
            }
          }
          getCartByUserId()
      }, [triggerToUpdateCartIcon])
   
      return (
         <Container isAdmin={isAdmin}>
   
            <button onClick={() => handleNavigate('/menu')}>
               <FcMenu />
            </button>
   
            <Logo onClick={() => handleNavigate('/')} >
               <img src={logo} alt="logo do food explorer" />
   
               <Text>
                  <p>food explorer</p>
                  <span style={{ display: isAdmin ? 'flex' : 'none' }}>
                     admin
                  </span>
               </Text>
            </Logo>
   
            <Search>
               <input
                  type="text"
                  placeholder='Busque por pratos ou ingredientes'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
               />
   
               <Dropdown style={{ display: searchSelected ? 'block' : 'none' }}>
                  {dish.map((dish) => (
                     <Dish key={dish.id}>
   
                        <div className="image" onClick={() => handleNavigate(`/details/${dish.id}`)}>
                           <img src={handleImage(dish.image)} alt="" />
                        </div>
   
                        <div className="text" onClick={() => handleNavigate(`/details/${dish.id}`)}>
                           <h3>{dish.title}</h3>
                           <p>{dish.description}</p>
                           <span>R${dish.price}</span>
                        </div>
   
                        <div className="button">
                           <Button
                              icon={AiOutlineShoppingCart}
                              onClick={() => handleNavigate(`/details/${dish.id}`)}
                           />
                        </div>
   
                     </Dish>
                  ))}
               </Dropdown>
            </Search>
   
            <AlternativeInput isAdmin={isAdmin} >
   
               <div className="favorite">
                  <Button
                     title='Favoritos'
                     icon={AiOutlineStar}
                     onClick={() => handleNavigate('/favorites')}
                  />
               </div>
   
               <div className="cart" onClick={() => handleNavigate('/cart')}>
                  <button><BsReceiptCutoff /></button>
                  <label>{cart? cart.length : '0'}</label>
               </div>

               <Button
                  title={isAdmin ? 'Novo Prato' : cart? `Pedidos (${cart.length})`: `Pedidos (0)`}
                  icon={isAdmin ? '' : BsReceiptCutoff}
                  onClick={() => handleNavigate(isAdmin? '/new' : '/cart')}
               />
   
            </AlternativeInput>
   
            <LeaveIcon>
               <button onClick={() => handleNavigate('/singOut')}>
                  <img
                     src={SingOut}
                     alt="Ícone de saída"
                  />
               </button>
            </LeaveIcon>
   
         </Container>
      )
   }
) 