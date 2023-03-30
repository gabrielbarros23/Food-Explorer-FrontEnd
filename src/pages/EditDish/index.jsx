import { Container, Form, IngredientArea, FirstRow, SecondRow, ThirdRow, Submit, Ingredient, Preview } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import { RxCaretLeft } from 'react-icons/rx'
import { AiFillCamera } from 'react-icons/ai'
import { TextArea, InputConfig, Select, NoteIngredient, Button, Input, Footer, Header } from '../../components'

export function EditDish() {
    const navigate = useNavigate()
    const params = useParams()
    const { uptadeDish } = useAuth()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [categories, setCategories] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState([])
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)


    const [dish, setDish] = useState(null)
    const [options, setOptions] = useState([])
    const [image, setImage] = useState(null)

    const [preview, setPreview] = useState()
    const [showPreview, setShowPreview] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false)


    function handleIngredient() {
        if (newIngredient.length == 0) {
            return alert('Preencha para adcionar o ingrediente')
        }
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient([])
    }

    function handleRemoveIngredient({ e, ingredient }) {
        e.preventDefault()
        const updatedIngredient = ingredients.filter(e => e !== ingredient)
        setIngredients(updatedIngredient)
    }

    function handleShowPreview(e) {
        e.preventDefault()

        if (showPreview) {
            setShowPreview(false)
        } else {
            setShowPreview(true)
        }
    }

    function handleSubmit() {
        if (!title || !description || !categories || !price || !ingredients) {
            return alert('Preencha Todos os campos.')
        }

        if (newIngredient.length !== 0) {
            return alert('Voce não confirmou um ingrediente. clique no mais para adcionar ou limpe o campo.')
        }

        const Confirm = window.confirm('deseja atualizar o prato?')
        if (!Confirm) {
            return
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

        uptadeDish({ data, image, id }).then(() => setLoading(false)).catch(() => setLoading(false))

        navigate('/')
    }

    async function handleDeleteDish() {
        setLoading(true)
        const confirm = window.confirm("Deseja deletar o prato?")

        if (confirm) {
            await api.delete(`/dishes/${params.id}`).then(() => setLoading(false)).catch(() => setLoading(false))
            navigate('/')
        }
    }

    function handleImage(e) {
        const file = e.target.files[0]
        setImage(file)

        const imagePreview = URL.createObjectURL(file);
        setPreview(imagePreview)
        setButtonDisable(true)
        setShowPreview(true)
    }


    useEffect(() => {
        async function DishSetup() {
            const dish = await api.get(`/dishes/${params.id}`)
            const data = dish.data
            const image = `${api.defaults.baseURL}/files/${data.image}`
            setPreview(image)

            setDish(data)
            setCategories(data.categorie)
            const option = data.categorie.replace('ca', 'çã')
            setOptions([option])

            setTitle(data.title)
            setPrice(data.price)
            setIngredients([data.ingredients])
            setDescription(data.description)

            const ShowIngredient = await api.get(`/ingredient/${params.id}`)
            const DataIngredients = ShowIngredient.data

            const ingredients = DataIngredients.map((data) => {
                return data.ingredient
            })
            setIngredients(ingredients)
        }
        DishSetup()

    }, [])



    return (
        <Container>
            <Header />

            {dish &&
                <Form>
                    <Link to='/'><RxCaretLeft />voltar</Link>

                    <h1>Editar prato</h1>

                    <FirstRow>
                        <Preview showPreview={showPreview}>
                            <label htmlFor="Image">
                                <img src={preview} alt="" />
                                <span><AiFillCamera /></span>
                                <input type="file" id="Image" onChange={handleImage} />


                                <span>clique para adcionar uma imagem</span>

                                {showPreview &&
                                    <label htmlFor="Image">
                                        <AiFillCamera />
                                        <input type="file" id="Image" onChange={handleImage} />
                                    </label>
                                }
                            </label>

                            <button disabled={buttonDisable} onClick={(e) => handleShowPreview(e)}>Ver Imagem Atual</button>
                        </Preview>

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

                                {ingredients.map((ingredient, index) => (
                                    <Ingredient key={index}>
                                        <p> {ingredient} <button onClick={(e) => handleRemoveIngredient({ e, ingredient })}><FiX /></button></p>
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
                            <TextArea
                                placeholder={dish.description}
                                defaultValue={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </InputConfig>

                    </ThirdRow>

                    <Submit>

                        <Button title='Excluir prato' onClick={() => handleDeleteDish()} loading={loading} />
                        <Button title='Salvar alterações' onClick={() => handleSubmit()} loading={loading} />

                    </Submit>

                </Form>
            }

            <Footer />
        </Container>
    )
}