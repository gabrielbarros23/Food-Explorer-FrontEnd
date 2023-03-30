import { Container, Logo, Text, Cart, Input, LeaveIcon, Search, Dish } from './style'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { FcMenu } from 'react-icons/fc'
import { BsReceiptCutoff } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from '../Button'
import logo from '../../assets/Polygon blue.svg'
import SingOut from '../../assets/SingOut.svg'
import { useState, useEffect } from 'react'


export function Header() {
  const { user, singOut } = useAuth()

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [inputSelected, setInputSelected] = useState(false);
  
  const navigate = useNavigate()
  const isAdmin = Boolean(user.admin)
  
  function handleInputFocus () {
    setInputSelected(true);
  };

  function handleInputBlur ()  {
    setTimeout(() => {
      setInputSelected(false);
    }, 100)
  };

  function handleNavigate(route){
    if(route === 'new' && !isAdmin){
      return
    }
    navigate(route)
  }

  function handleLogOut() {
    singOut()
    navigate('/')
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function handleImage (url) {
    const dishImage =  `${api.defaults.baseURL}/files/${url}`
    return dishImage
  }

  useEffect(() => {
    async function fecthDishes() {
      const response = await api.get(`/dishes?search=${search}`)
      const data = response.data
      setData(data)
    }
    fecthDishes()
  }, [search])

  return (
    <Container isAdmin={isAdmin}>

      <button onClick={() => handleNavigate('/menu')}><FcMenu /></button>

      <Logo onClick={() => handleNavigate('/')}>
        <img src={logo} alt="logo do food explorer" />

        <Text>
          <p>food explorer</p>
          <span style={{ display: isAdmin ? 'flex' : 'none' }}>admin</span>
        </Text>
      </Logo>

      <Input>
        <input 
          type="text" 
          placeholder='Busque por pratos ou ingredientes' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          onFocus={handleInputFocus} 
          onBlur={handleInputBlur}
        />
          
        <Search style={{display: inputSelected? 'block' : 'none'}}>
          {
            data.map((dish) => (
              <Dish key={dish.id}>

                <div className="image">
                  <img src={handleImage(dish.image)} alt="" />
                </div>

                <div className="text" onClick={() => handleDetails(dish.id)}>
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                  <span>R${dish.price}</span>
                </div>

                <div className="button">
                  <Button 
                    icon={AiOutlineShoppingCart} 
                    onClick={() => handleDetails(dish.id)}
                  />
                </div>
                
              </Dish>
            ))
          }
        </Search>
      </Input>

      <Cart isAdmin={isAdmin} >

        <button><BsReceiptCutoff /></button>
        <label>1</label>

        <Button 
          title={isAdmin ? 'Novo Prato' : 'Pedidos(0)'} 
          icon={isAdmin ? '' : BsReceiptCutoff} 
          onClick={() => handleNavigate('/new')} 
        />

      </Cart>

      <LeaveIcon>
        <button onClick={handleLogOut}><img src={SingOut} alt="Icone de saida" /></button>
      </LeaveIcon>

    </Container>
  )
}