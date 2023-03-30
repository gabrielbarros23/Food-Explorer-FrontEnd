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

  const handleInputFocus = () => {
    setInputSelected(true);
  };

  const handleInputBlur = () => {
    setInputSelected(false);
  };

  const navigate = useNavigate()
  const isAdmin = Boolean(user.admin)



  function handleMenu() {
    navigate('/menu')
  }

  function handleLogOut() {
    singOut()
    navigate('/')
  }

  function handleDish() {
    if (isAdmin) {
      navigate('/new')
    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function navigateToHome() {
    navigate('/')
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

      <button onClick={() => handleMenu()}><FcMenu /></button>

      <Logo onClick={navigateToHome}>
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

        <Search inputSelected={inputSelected}>
          {inputSelected &&
            data.map((dish) => (
              <Dish>
                <div className="image">
                  <img src={handleImage(dish.image)} alt="" />
                </div>
                <div className="text" onClick={() => handleDetails(dish.id)}>
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                  <span>R${dish.price}</span>
                </div>
                <div className="button">
                  <Button icon={AiOutlineShoppingCart} onClick={() => handleDetails(dish.id)}/>
                </div>
              </Dish>
            ))
          }
        </Search>
      </Input>

      <Cart isAdmin={isAdmin} >

        <button><BsReceiptCutoff /></button>
        <label>1</label>

        <Button title={isAdmin ? 'Novo Prato' : 'Pedidos(0)'} icon={isAdmin ? '' : BsReceiptCutoff} onClick={() => handleDish()} />

      </Cart>

      <LeaveIcon>
        <button onClick={handleLogOut}><img src={SingOut} alt="Icone de saida" /></button>
      </LeaveIcon>

    </Container>
  )
}