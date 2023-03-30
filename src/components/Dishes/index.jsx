import { Container, Image, Amount, Market } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../Button'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



export function Dishes({ data, isAdmin, ...rest }) {
  const { user } = useAuth()
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  const Admin = Boolean(user.admin)
  const icon = Admin ? <BsPencil /> : <AiOutlineHeart />

  const dishImage = `${api.defaults.baseURL}/files/${data.image}`
  const ButtonContext = Admin ? 'Detalhes' : 'Incluir'

  function HandleCount(val) {
    let updated = val + count

    if (updated <= 0) {
      updated = 1
    }

    setCount(updated)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  function handleEdit(admin) {
    if (admin) {
      navigate(`/edit/${data.id}`)
    }
  }

  return (
    <Container isAdmin={Admin} {...rest}>

      <Image isAdmin={Admin}>
        <button onClick={() => handleEdit(Admin)}>
          {icon}
        </button>
        <img src={dishImage} alt={data.title} />
      </Image>

      <h1>{data.title}</h1>

      <p>{data.description}</p>

      <p>{'R$ ' + data.price}</p>

      <Market isAdmin={Admin}>
        <Amount isAdmin={Admin}>
          <button onClick={() => HandleCount(-1)}><AiOutlineMinus /></button>
          <p>{count}</p>
          <button onClick={() => HandleCount(1)}><AiOutlinePlus /></button>
        </Amount>

        <Button title={ButtonContext} onClick={() => handleDetails(data.id)} />
      </Market>

    </Container>
  )
}