import {Container, Mobile, Desktop} from './style.js'
import { Select } from '../index.js'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth.jsx'
import { api } from '../../services/api.js'

export function TableDishControllers({order}){
  const {handleStatusUpdate} = useAuth()
  const options =[
    'Pendente',
    'Preparando',
    'Entregue'
  ]
  const [title, setTitle] = useState([])

  function handleCode(orderNumber){
    return orderNumber.toString().padStart(8, '0')
  }

  function handleDate(order){
    const [date, hours] = order.created_at.split(' ')
    const splitDate = date.split('-')
    const splitHours = hours.split(':')

    return `${splitDate[2]}/${splitDate[1]} ás ${splitHours[0]}:${splitHours[1]}`
  }

  async function handleTitle(){
    const Dishes = order.map(order => api.get(`/orders/${order.order_number}`).then(res => res.data))
    const dataTitle = await Promise.all(Dishes)
    setTitle(dataTitle)
  }

  function handleStatusValue(status){
    if(status === 0){
      return 'Pendente'
    }
    if(status === 1){
      return 'Preparando'
    }
    if(status === 2){
      return 'Entregue'
    }
  }

  useEffect(() => {
    handleTitle()
  }, [order])
  
  return(
    <Container>
      {title.length !== 0 && 
        order.map((order, index) => (
          <Mobile key={order.order_number}>
            <div className="info">
              <span>{handleCode(order.order_number)}</span>
              <p>{handleDate(order)}</p>
            </div>
            
            <div className="details">
              <p>{title[index].toString()}</p>
            </div>

            <div className="status">
              <Select 
                value={ handleStatusValue(order.status)} 
                options={options} 
                onChange={(e) =>
                  handleStatusUpdate({
                    status: e.target.value,
                    order_number: order.order_number,
                  })
                }
              />
            </div>
          </Mobile>
        ))}

      <Desktop>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>            
          </thead>
          <tbody>
            {title.length !== 0 && 
              order.map((order, index) => (
                <tr key={order.order_number}>
                  <td>
                    <Select 
                      value={ handleStatusValue(order.status)} 
                      options={options} 
                      onChange={(e) =>
                        handleStatusUpdate({
                          status: e.target.value,
                          order_number: order.order_number,
                        })
                      }
                    />
                  </td>
                  <td>{handleCode(order.order_number)}</td>
                  <td>{title[index].toString()}</td>
                  <td>{handleDate(order)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Desktop>
    </Container>
  )
}