import { Routes, Route } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Details } from '../pages/Details'
import { Favorites } from '../pages/Favorites'
import {Cart} from '../pages/Cart'
import {Order} from '../pages/Order'
import {History} from '../pages/History'

export function AppRoutes() {

    const {user} = useAuth()
    const isAdmin = Boolean(user.admin)

    const adminRoute = [
        
        <Route path="/" element={<Home/>} key={'Home'} />, 
        <Route path="/new" element={<NewDish/> } key={'NewDish'}/>, 
        <Route path="/edit/:id" element={<EditDish/>} key={'EditDish'} />, 
        <Route path="/details/:id" element={<Details/>} key={'Details'} />,
        <Route path="/menu" element={<Menu/>} key={'Menu'} />,
        <Route path="/order" element={<Order/>} key={'Order'} />,

    ]
    
    

    const userRoute = [
        <Route path="/" element={<Home/>} key={'Home'}/>, 
        <Route path="/details/:id" element={<Details/>} key={'Details'}/>, 
        <Route path="/menu" element={<Menu/>} key={'Menu'}/>,
        <Route path="/favorites" element={<Favorites/>} key={'Favorites'}/>,
        <Route path="/cart" element={<Cart/>} key={'Cart'}/>,
        <Route path="/history" element={<History/>} key={'History'}/>
        
    ]

    return (
        <Routes>

            {isAdmin? adminRoute : userRoute}

        </Routes>
    )
}