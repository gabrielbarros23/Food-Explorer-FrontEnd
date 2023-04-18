import {Container, Content} from './style'
import { useEffect, useState } from 'react'
import { Header, Footer, TableDishControllers } from '../../components'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'


export function Order(){
  const [orders, setOrders] = useState([])
  const {triggerUpdateOrder} = useAuth()

  useEffect(() => {
    async function GetOrders(){
      const order = await api.get('/orders').then(response => response.data)
      setOrders(order)
    }
    GetOrders()
  }, [triggerUpdateOrder])
  return(
    <Container>
      <Header/>

      <Content>
        <h1>Pedidos</h1>
        {orders && 
          <TableDishControllers order={orders}/>
        }
      </Content>

      <Footer/>

    </Container>
  )
}