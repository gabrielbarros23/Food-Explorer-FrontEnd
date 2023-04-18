import { Container, Content, Links, Header } from './style'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { Footer, Input, Section, Dishes } from '../../components'

export function Menu() {

    const { singOut, user } = useAuth()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const isAdmin = Boolean(user.admin)

    function handleLogOut() {
        singOut()
        navigate('/')
    }

    function handleNavigate(route) {
        navigate(route)
    }

    function handleBack() {
        navigate(-1)
    }



    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?search=${search}`)
            const data = response.data

            setData(data)
        }
        fetchDishes()
    }, [search])

    return (
        <Container >
            <Header>
                <button onClick={handleBack}><AiOutlineClose /></button> <p>Menu</p>
            </Header>

            <Content>

                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    icon={BsSearch}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {search &&
                    <Section title='Resultado' dishQuantity={data}>

                        {data.map((dish) => (
                            <Dishes
                                key={dish.id}
                                data={dish}
                            />
                        ))}

                    </Section>
                }

                <Links >
                    <button className='link' onClick={() => handleNavigate('/')}>
                        Inicio
                    </button>

                    {isAdmin &&
                        <button className='link' onClick={() => handleNavigate('/order')}>
                            Pedidos
                        </button>
                    }

                    {isAdmin &&
                        <button className='link' onClick={() => handleNavigate('/new')}>
                            Novo prato
                        </button>
                    }

                    {!isAdmin &&
                        <button className='link' onClick={() => handleNavigate('/favorites')}>
                            Favoritos
                        </button>
                    }

                    <button className='link' onClick={() => handleLogOut()}>
                        Sair
                    </button>


                </Links>

            </Content>

            <Footer />

        </Container>
    )
}