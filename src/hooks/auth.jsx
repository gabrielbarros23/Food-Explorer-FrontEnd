import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const [triggerToUpdateCartIcon, setTriggerToUpdateCartIcon] = useState(1)
    const [triggerUpdateOrder, setTriggerUpdateOrder] = useState(1)

    async function Login({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password })
            const { token, user } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
        } catch (error) {
            if (error.response) {
                throw alert(error.response.data.message)
            } else {
                throw alert('Não foi possível entrar.')
            }
        }
    }

    async function singUp({ name, email, password }) {
        try {
            await api.post('/users', { name, email, password });

            alert('Conta criada com sucesso!');
        } catch (error) {

            if (error.response) {
                throw alert(error.response.data.message)
            } else {
                throw alert('Não foi possível editar o prato.')
            }
        }
    }

    function singOut() {
        const confirm = window.confirm("Deseja sair da sua conta?")

        if (confirm) {
            localStorage.removeItem('@foodexplorer:token')
            localStorage.removeItem('@foodexplorer:user')
            setData({})
            return true
        }else{
            return false
        }

    }

    async function createDish({ data, image }) {
        try {
            const fileUploadForm = new FormData()
            fileUploadForm.append("image", image)
            fileUploadForm.append("data", data)

            await api.post('/dishes', fileUploadForm)
            alert('Prato feito com sucesso.')
        } catch (error) {
            if (error.response) {
                throw alert(error.response.data.message)
            } else {
                throw alert('Não foi possível criar o prato.')
            }
        }
    }

    async function updateDish({ data, image, id }) {
        try {
            const fileUploadForm = new FormData()
            fileUploadForm.append("image", image)
            fileUploadForm.append("data", data)

            await api.put(`/dishes/${id}`, fileUploadForm)
            alert('Prato atualizado com sucesso.')
        } catch (error) {
            if (error.response) {
                throw alert(error.response.data.message)
            } else {
                throw alert('Não foi possível editar o prato.')
            }
        }
    }

    async function searchCategory(category) {
        try {
            if (!category) {
                alert('insira a categoria')
            }

            return await api.get(`/categories?categorie=${category}`)

        } catch (error) {
            if (error.response) {
                throw alert(error.response.data.message)
            } else {
                throw alert('Não foi possível buscar o prato.')
            }
        }
    }

    async function handleStatusUpdate({status, order_number}){
        try{
            if(status === 'Pendente'){
                await api.put('/orders', {status:0, order_number})
                await api.put('/history', {status:0, order_number})
            }
            if(status === 'Preparando'){
                await api.put('/orders', {status:1, order_number})
                await api.put('/history', {status:1, order_number})
            }
            if(status === 'Entregue'){
                const confirm = window.confirm("Deseja finalizar o pedido?")
                if(confirm){
                    await api.delete(`/orders/${order_number}`)
                    await api.put('/history', {status:2, order_number})
                }else{
                    return
                }
            }
            setTriggerUpdateOrder(prevState => prevState + 1)
        }catch (error){
            if(error.response){
                throw alert(error.response.data.message)
            }else{
                throw alert('não foi possível mudar o status do pedido')
            }
        }
    }
    

    class CartClass{
        async addItemToCart({dish_id, quantity}){
            let promises = []
            
            for(let i = 0; i < quantity; i++){
               promises.push(api.post(`carts/${dish_id}`))
            }
               
            await Promise.all(promises)
            .then(setTriggerToUpdateCartIcon(prevState => prevState + 1))
            
        }

        async handleDeleteItem(cart_id){
            try{
              await api.delete(`/carts/${cart_id}`)
              setTriggerToUpdateCartIcon(prevState => prevState + 1)
        
            }catch (error) {
              if (error.response) {
                throw alert(error.response.data.message)
              } else {
                throw alert('Não foi possível apagar o item do carrinho')
              }
            }
          }


    }

    class FavoritesClass {

        async GetFavoritesByUserId() {
            try{
                const id = data.user.id
                return await api.get(`/favorites/${id}`)

            }catch(error){
                if (error.response) {
                    throw alert(error.response.data.message)
                } else {
                    throw alert('Não foi possível buscar os prato favoritos do usuário.')
                }
            }
        }

        async CreateFavorites(dish_id, dish_title) {
            try{
                return await api.post('/favorites', { dish_id, dish_title })
            }
            catch(error){
                if (error.response) {
                    throw alert(error.response.data.message)
                } else {
                    throw alert('Não foi possível adicionar o prato aos favoritos.')
                }
            }
        }

        async DeleteFavorites(favorite_id) {
            try{
                return await api.delete(`/favorites/${favorite_id}`)
            }
            catch(error){
                if (error.response) {
                    throw alert(error.response.data.message)
                } else {
                    throw alert('Não foi possível deletar o prato dos favoritos.')
                }
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('@foodexplorer:token')
        const user = localStorage.getItem('@foodexplorer:user')

        api.interceptors.response.use(
            response => {
                return response
            },
            error => {
                if(error.response && error.response.status === 401 && error.response.data.message === 'Token Expirado') {
                    localStorage.removeItem('@foodexplorer:token');
                    localStorage.removeItem('@foodexplorer:user');
                    setData({})   
                }
                return Promise.reject(error);
            }
        )

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user: JSON.parse(user), token })
        }

    }, [])

    return (
        <AuthContext.Provider value={{ Login, singOut, searchCategory, createDish, updateDish, CartClass, FavoritesClass, singUp, triggerToUpdateCartIcon, handleStatusUpdate, triggerUpdateOrder, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }

