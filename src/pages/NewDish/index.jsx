import { Container, Form, IngredientArea, FirstRow, SecondRow, ThirdRow, Submit, Ingredient, Preview} from './style'
import {useAuth} from '../../hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {RxCaretLeft} from 'react-icons/rx'
import {AiFillCamera} from 'react-icons/ai'
import {FiX} from 'react-icons/fi'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {FileInput} from '../../components/FileInput'
import {Select} from '../../components/Select'
import {NoteIngredient} from '../../components/NoteIngredient'
import {Textarea} from '../../components/Textarea'
import {InputConfig} from '../../components/InputConfig'


export function NewDish(){
    const {createDish, user} = useAuth()
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [categories, setCategories] = useState('Refeição')
    const [loading, setLoading] = useState(false)


    const [newIngredient, setNewIngredient] = useState([])
    const [options, setOptions] = useState(['Refeição', 'Bebida', 'Sobremesa'])
     
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState()
    const [previewIsNull, setPreviewIsNull] = useState(true);

    
    async function handleSubmit(){
        
        if(!title || !description || !categories || !price || !ingredients){
            return alert('Preencha Todos os campos.')
        }

        if(!image){
            return alert('Selecione uma imagem.')
        }
        
        if(newIngredient.length !== 0 ){
            return alert('Voce não confirmou um ingrediente. clique no mais para adcionar ou limpe o campo.')
        }

        setLoading(true)
        
        const categorie = categories.replace('çã', 'ca')
        
        const dataJSON = {
            title,
            price,
            ingredients,
            description,
            categorie
        }
        
        const data = JSON.stringify(dataJSON)
       
        createDish({data, image}).then(() => setLoading(false)).catch(() => setLoading(false))

        navigate('/')
    }

    function handleImage(e){
        const file = e.target.files[0]
        setImage(file)
        
        
        const imagePreview = URL.createObjectURL(file);
        console.log(imagePreview)
        setPreview(imagePreview)
    }

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

    useEffect(() => {
        if(!user.admin){
            navigate('/')
        }
    }, [])

    useEffect(() => {
        if(preview){
            setPreviewIsNull(false)
        }
    }, [preview])
   
    return(
        <Container>
            <Header/>

            <Form>
                <Link to='/'><RxCaretLeft/>voltar</Link>

                <h1>Novo Prato</h1>

                <FirstRow>

                    <Preview previewIsNull={previewIsNull}>

                        <label htmlFor="Image">
                            <img src={preview} alt=""/>
                            <span><AiFillCamera/></span>
                            <input type="file" id="Image" onChange={handleImage}/>
                            <span>clique para adcionar uma imagem</span>

                            {!previewIsNull && 
                                <label htmlFor="Image">
                                    <AiFillCamera/>
                                    <input type="file" id="Image" onChange={handleImage}/>
                                </label>
                            }
                        </label>

                    </Preview>

                    

                    <InputConfig label={'Nome'}>

                        <Input 
                            type="text" 
                            id="name" 
                            placeholder="Ex: Salada Ceasar" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        
                    </InputConfig>

                    <InputConfig label={'Categoria'}>
                        
                        <Select 
                            options={options} 
                            value={categories} 
                            onChange={e => setCategories(e.target.value)}
                        />

                    </InputConfig>
                    

                </FirstRow>
                
                
                <SecondRow>

                    <InputConfig label={'Ingredientes'}>

                        <IngredientArea>

                            {ingredients.map((ingredient, index) => (
                                <Ingredient key={index}>
                                    <p>{ingredient} <button onClick={(e) => handleRemoveIngredient({e,ingredient})}><FiX/></button></p>
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
                            placeholder="Ex: 20,99" 
                            name="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />

                    </InputConfig>

                </SecondRow>

                <ThirdRow>

                    <InputConfig label={'Descrição'}>
                        
                        <Textarea 
                            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                            defaultValue={description} 
                            onChange={e => setDescription(e.target.value)}
                        />

                    </InputConfig>
                    
                </ThirdRow>

                <Submit>
                    <Button 
                        title='Salvar prato' 
                        onClick={() =>handleSubmit()}
                        loading={loading}
                    />
                </Submit>

            </Form>

            <Footer/>
        </Container>
    )
}