import { Container, Form, Logo, Register } from './style'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import logo from '../../assets/Polygon blue.svg'





export function SingIn() {
    
    const { Login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit() {
        setLoading(true)
        Login({ email, password }).catch(() => setLoading(false))
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo do food explorer" />
                <h1>food explorer</h1>
            </Logo>

            <Form >

                <h1>Faça login</h1>

                <label htmlFor="Email">Email</label>
                <Input
                    placeholder={"exemplo@exemplo.com.br"}
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="Password">Senha</label>
                <Input
                    placeholder={"No mínimo 6 caracteres"}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSubmit}
                    loading={loading}
                />

                <Register>
                    <Link to='/register'> Criar uma conta</Link>
                </Register>

            </Form>
        </Container>
    )
}

