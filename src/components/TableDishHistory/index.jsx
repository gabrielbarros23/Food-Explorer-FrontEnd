import {Container, Mobile, Desktop} from './style.js'
import { Select } from '../index.js'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth.jsx'
import { api } from '../../services/api.js'

export function TableDishHistory({history}){
  const {handleStatusUpdate} = useAuth()
  const options =[
    'Pendente',
    'Preparando',
    'Entregue'
  ]
  const [title, setTitle] = useState([])
  const [h2BackgroundColor, setH2BackgroundColor] = useState('red')

  function handleCode(orderNumber){
    return orderNumber.toString().padStart(8, '0')
  }

  function handleDate(history){
    const [date, hours] = history.created_at.split(' ')
    const splitDate = date.split('-')
    const splitHours = hours.split(':')

    return `${splitDate[2]}/${splitDate[1]} ás ${splitHours[0]}:${splitHours[1]}`
  }

  async function handleTitle(){
    const Dishes = history.map(history => api.get(`/history/${history.order_number}`).then(res => res.data))
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

  function handleColor(status){
    if(status === 0){
      return 'red'
    }
    if(status === 1){
      return 'yellow'
    }
    if(status === 2){
      return 'green'
    }
  }

  useEffect(() => {
    handleTitle()
  }, [history])
  
  return(
    <Container>
      {title.length !== 0 && 
        history.map((history, index) => (
          <Mobile key={history.order_number}>
            <div className="info">
              <span>{handleCode(history.order_number)}</span>
              <p>{handleDate(history)}</p>
            </div>
            
            <div className="details">
              <p>{title[index].toString()}</p>
            </div>

            <div className="status">
              <h3 style={{color: handleColor(history.status)}}>{handleStatusValue(history.status)}</h3>
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
              history.map((history, index) => (
                <tr key={history.order_number}>
                  <td>
                    <h3 style={{color: handleColor(history.status)}}>{handleStatusValue(history.status)}</h3>
                  </td>
                  <td>{handleCode(history.order_number)}</td>
                  <td>{title[index].toString()}</td>
                  <td>{handleDate(history)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Desktop>
    </Container>
  )
}