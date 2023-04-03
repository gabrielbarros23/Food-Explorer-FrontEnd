import { Container, Form, Logo, Register } from './style'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../assets/Polygon blue.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SingUp() {
    const { singUp } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()

    async function handleSubmit() {

        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }
        setLoading(true)
        singUp({ name, email, password }).then(() => navigate('/')).catch(() => setLoading(false))

    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo do food explorer" />
                <h1>food explorer</h1>
            </Logo>

            <Form >

                <h1>Crie sua conta</h1>

                <label htmlFor="Name">Seu Nome</label>
                <Input
                    placeholder="Maria Silva"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label htmlFor="Email">Email</label>
                <Input
                    placeholder="exemplo@exemplo.com.br"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="Password">Senha</label>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Criar Conta"
                    onClick={handleSubmit}
                    loading={loading}
                />

                <Register>
                    <Link to='/'> Já tenho uma conta</Link>
                </Register>

            </Form>
        </Container>
    )
}