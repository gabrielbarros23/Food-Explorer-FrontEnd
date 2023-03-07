import {Container, Form, Logo, Register} from './style'
import {api} from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'	
import logo from '../../assets/Polygon blue.svg'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'



export function SingUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSubmit(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
        
        api.post('/users', {name, email, password}).then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate('/')
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }
    
    return(
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
                />

                <Register>
                    <Link to='/'> Já tenho uma conta</Link>
                </Register>

            </Form>
        </Container>
    )
}