import {Container, Content} from './style'
import { useEffect, useState } from 'react'
import { Header, Footer, TableDishHistory } from '../../components'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'


export function History(){
  const [history, setHistory] = useState([])
  const {triggerUpdateOrder} = useAuth()

  useEffect(() => {
    async function GetOrders(){
      const order = await api.get('/history').then(response => response.data)
      setHistory(order)
    }
    GetOrders()
  }, [triggerUpdateOrder])
  return(
    <Container>
      <Header/>

      <Content>
        <h1>Pedidos</h1>
        {history && 
          <TableDishHistory history={history}/>
        }
      </Content>

      <Footer/>

    </Container>
  )
}