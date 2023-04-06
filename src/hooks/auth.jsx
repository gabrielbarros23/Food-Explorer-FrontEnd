import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})

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

    async function uptadeDish({ data, image, id }) {
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
                    throw alert('Não foi possivel adicionar o prato aos favoritos.')
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
        <AuthContext.Provider value={{ Login, singOut, searchCategory, createDish, uptadeDish, FavoritesClass, singUp, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }

