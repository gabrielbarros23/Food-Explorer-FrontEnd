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

    function handleNewDish() {
        navigate('/new')
    }

    function handleBack() {
        navigate(-1)
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
                    <Section title='Resultado' quantity={data}>

                        {data.map((dish) => (
                            <Dishes
                                key={dish.id}
                                data={dish}
                            />
                        ))}

                    </Section>
                }

                <Links isAdmin={isAdmin}>

                    <button className='link' onClick={() => handleNewDish()}>
                        Novo prato
                    </button>

                    <button className='link' onClick={() => handleLogOut()}>
                        Sair
                    </button>

                </Links>

            </Content>

            <Footer />

        </Container>
    )
}