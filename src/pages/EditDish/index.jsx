import { Container, Form, IngredientArea, FirstRow, SecondRow, ThirdRow, Submit, Ingredient} from './style'
import { useAuth } from '../../hooks/auth'
import {api} from '../../services/api'
import { useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {FiX} from 'react-icons/fi'
import {RxCaretLeft} from 'react-icons/rx'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {FileInput} from '../../components/FileInput'
import {Select} from '../../components/Select'
import {NoteIngredient} from '../../components/NoteIngredient'
import {Textarea} from '../../components/Textarea'
import {InputConfig} from '../../components/InputConfig'

export function EditDish(){
    const navigate = useNavigate()
	const params = useParams()
    const {uptadeDish} = useAuth()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [categories, setCategories] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    const [description, setDescription] = useState('')

    const [dish, setDish] = useState(null)
    const [options, setOptions] = useState([]) 
    const [image, setImage] = useState(null)


    function handleIngredient(){
        if(newIngredient.length == 0){
            return alert('Preencha para adcionar o ingrediente')
        }
        setIngredients( prevState => [...prevState, newIngredient])
        setNewIngredient([])
    }

    function handleRemoveIngredient({e, ingredient}){
        e.preventDefault()
        const updatedIngredient = ingredients.filter(e => e !== ingredient)
        setIngredients(updatedIngredient)
    }

    function handleSubmit() {
        if(!title || !description || !categories || !price || !ingredients){
            return alert('Preencha Todos os campos.')
        }

        if(!image){
            return alert('Coloque uma foto.')
        }

        if(newIngredient.length !== 0 ){
            return alert('Voce não confirmou um ingrediente. clique no mais para adcionar ou limpe o campo.')
        }

        const dataJSON = {
            title,
            price,
            ingredients,
            description,
            categories
        }

        const id = params.id

        const data = JSON.stringify(dataJSON)

        uptadeDish({data, image, id})

        navigate('/')
    }

    async function handleDeleteDish(){
        const confirm = window.confirm("Deseja deletar o prato?")

        if(confirm){
            await api.delete(`/dishes/${params.id}`)
            navigate('/')
        }
    }

    function handleImage(e){
        const file = e.target.files[0]
        setImage(file)
    }

    
    useEffect(() => {
        async function DishSetup(){
            const dish = await api.get(`/dishes/${params.id}`)
            const data = dish.data
            setDish(data)
            setCategories(data.categorie)
            setOptions([data.categorie])

            const ShowIngredient = await api.get(`/ingredient/${params.id}`)
            const DataIngredients = ShowIngredient.data
            
            const ingredients = DataIngredients.map((data) => {
                return data.ingredient
            })
            setIngredients(ingredients)
        }
        DishSetup()
        
    }, [])

    return(
        <Container>
            <Header/>

            {dish && 
            <Form>
                <Link to='/'><RxCaretLeft/>voltar</Link>

                <h1>Editar prato</h1>

                <FirstRow>

                    <InputConfig label={'imagem do prato'}>

                        <FileInput 
                            placeholder={'Selecione imagem'} 
                            onChange={(e) => handleImage(e)}
                        />

                    </InputConfig>

                    <InputConfig label={'Nome'}>

                        <Input 
                            type="text" 
                            id="name" 
                            placeholder={dish.title}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        
                    </InputConfig>
                    
                    <InputConfig label={'Categoria'}>
                        
                        <Select 
                            options={options} 
                            defaultValue={categories} 
                        />

                    </InputConfig>

                </FirstRow>
                
                <SecondRow>

                    <InputConfig label={'Ingredientes'}>

                        <IngredientArea>

                            {ingredients.map((ingredient) => (
                                <Ingredient key={ingredient}>
                                    <p> {ingredient} <button onClick={(e) => handleRemoveIngredient({e,ingredient})}><FiX/></button></p>
                                </Ingredient>
                            ))}

                            
                            <NoteIngredient  
                                placeholder="Adicionar"
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                onClick={() => handleIngredient()}
                            />

                        </IngredientArea>

                    </InputConfig>

                    <InputConfig label={'Preço'}>

                        <Input 
                            type="number" 
                            placeholder={dish.price} 
                            value={price} 
                            onChange={e => setPrice(e.target.value)}
                        />

                    </InputConfig>

                </SecondRow>

                <ThirdRow>

                    <InputConfig label={'Descrição'}>
                        <Textarea 
                            placeholder={dish.description} 
                            defaultValue={description} 
                            onChange={e => setDescription(e.target.value)}
                        />
                    </InputConfig>
                    
                </ThirdRow>

                <Submit>

                    <Button title='Excluir prato' onClick={() => handleDeleteDish()}/>
                    <Button title='Salvar alterações' onClick={() => handleSubmit()}/>

                </Submit>

            </Form>
        }

            <Footer/>
        </Container>
    )
}