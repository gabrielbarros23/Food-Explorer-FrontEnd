import { Container, Logo, Text, Cart, Input, LeaveIcon} from './style'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../hooks/auth'
import { FcMenu } from 'react-icons/fc'
import {BsReceiptCutoff} from 'react-icons/bs'
import { Button } from '../Button'
import logo from '../../assets/Polygon blue.svg'
import SingOut from '../../assets/SingOut.svg'


export function Header({value, onChange}){
    const {user} = useAuth()
    const navigate = useNavigate()
    
    const isAdmin = Boolean(user.admin)

    const {singOut} = useAuth()

    function handleMenu(){
        navigate('/menu')
    }

    function handleLogOut(){
        singOut()
        navigate('/')
    }

    function handleDish(){
        if(isAdmin){
            navigate('/new')
        }
    }

    function navigateToHome(){
        navigate('/')
    }

    return(
        <Container isAdmin={isAdmin}>
            
            <button onClick={() => handleMenu()}><FcMenu/></button>
    
            <Logo onClick={navigateToHome}>
                <img src={logo} alt="logo do food explorer" />

                <Text>
                    <p>food explorer</p>
                    <span style={{display: isAdmin? 'flex' : 'none'}}>admin</span>
                </Text>
            </Logo>


            <Input>
                <input type="text" placeholder='Busque por pratos ou ingredientes' value={value} onChange={onChange} />
            </Input>
    
            <Cart isAdmin={isAdmin} >
                
                <button><BsReceiptCutoff/></button>
                <label>1</label>

                <Button title={isAdmin? 'Novo Prato' : 'Pedidos(0)'} icon={isAdmin? '' : BsReceiptCutoff} onClick={() => handleDish()}/>
                
            </Cart>

            <LeaveIcon>
                <button onClick={handleLogOut}><img src={SingOut} alt="Icone de saida"/></button>
            </LeaveIcon>
         
        </Container>
    )
}