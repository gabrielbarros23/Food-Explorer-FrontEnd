import { Container, Form, IngredientArea, FirstRow, SecondRow, ThirdRow, Submit, Ingredient, Preview } from './style'
import { Header, Footer, Input, Button, Select, NewIngredientButton, Textarea, InputConfig } from '../../components'
import { useAuth } from '../../hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import { AiFillCamera } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

export function NewDish() {
  const { createDish } = useAuth()
  const navigate = useNavigate()

  const [dishTitle, setDishTitle] = useState('')
  const [dishPrice, setDishPrice] = useState('')
  const [dishDescription, setDishDescription] = useState('')
  const [dishIngredients, setDishIngredients] = useState([])
  const [dishCategory, setDishCategory] = useState('Selecione uma categoria')

  const [newIngredient, setNewIngredient] = useState([])
  const options = ['Selecione uma categoria', 'Refeição', 'Bebida', 'Sobremesa']
  const [loading, setLoading] = useState(false)

  const [dishImage, setDishImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  async function handleSubmit() {

    if (!dishTitle || !dishDescription || !dishCategory || !dishPrice || !dishIngredients) {
      return alert('Preencha Todos os campos.')
    }

    if (!dishImage) {
      return alert('Selecione uma dishImagem.')
    }

    if (newIngredient.length !== 0) {
      return alert('Voce não confirmou um ingrediente. clique no mais para adcionar ou limpe o campo.')
    }

    if (dishCategory == 'Selecione uma categoria') {
      return alert('Selecione uma categoria')
    }

    const Confirm = window.confirm('Deseja criar o prato?')
    if (!Confirm) {
      return
    }

    setLoading(true)

    const categorie = dishCategory.replace('Refeição', 'Refeicao')

    const dataJSON = {
      title: dishTitle,
      price: dishPrice,
      ingredients: dishIngredients,
      description: dishDescription,
      categorie
    }

    const data = JSON.stringify(dataJSON)

    createDish({ data, image: dishImage }).then(() => navigate('/')).catch(() => setLoading(false))

  }

  function handledishImage(e) {
    const file = e.target.files[0]
    setDishImage(file)

    const dishImagePreview = URL.createObjectURL(file);
    setImagePreview(dishImagePreview)
  }

  function handleIngredient() {
    if (newIngredient.length == 0) {
      return alert('Preencha para adcionar o ingrediente')
    }
    setDishIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient([])
  }


  function handleRemoveIngredient({ event, ingredient: ingredientTargetRemove }) {
    event.preventDefault()

    const updatedIngredients = dishIngredients.filter(actualIngredient => actualIngredient !== ingredientTargetRemove)

    setDishIngredients(updatedIngredients)
  }

  return (
    <Container>
      <Header />

      <Form>
        <Link to='/'><RxCaretLeft />voltar</Link>

        <h1>Novo Prato</h1>

        <FirstRow>

          <Preview imagePreviewIsNull={!imagePreview} >

            <label htmlFor="dishImage">
              <img src={imagePreview} alt={imagePreview ? 'dishImage do prato' : undefined} />
              <span><AiFillCamera /></span>
              <input type="file" id="dishImage" onChange={handledishImage} />
              <span>clique para adcionar uma dishImagem</span>

              {imagePreview &&
                <label htmlFor="dishImage">
                  <AiFillCamera />
                </label>
              }
            </label>

          </Preview>



          <InputConfig label={'Nome'}>

            <Input
              type="text"
              id="name"
              placeholder="Ex: Salada Ceasar"
              value={dishTitle}
              onChange={(e) => setDishTitle(e.target.value)}
            />

          </InputConfig>

          <InputConfig label={'Categoria'}>

            <Select
              options={options}
              value={dishCategory}
              onChange={e => setDishCategory(e.target.value)}
            />

          </InputConfig>

        </FirstRow>


        <SecondRow>

          <InputConfig label={'Ingredientes'}>

            <IngredientArea>

              {dishIngredients.map((ingredient, index) => (
                <Ingredient key={index}>
                  {ingredient} 
                  <button onClick={(event) => handleRemoveIngredient({ event, ingredient })}> <FiX /> </button>
                </Ingredient>
              ))}

              <NewIngredientButton
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
              value={dishPrice}
              onChange={e => setDishPrice(e.target.value)}
            />

          </InputConfig>

        </SecondRow>

        <ThirdRow>

          <InputConfig label={'Descrição'}>

            <Textarea
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              defaultValue={dishDescription}
              onChange={e => setDishDescription(e.target.value)}
            />

          </InputConfig>

        </ThirdRow>

        <Submit>
          <Button
            title='Salvar prato'
            onClick={() => handleSubmit()}
            loading={loading}
          />
        </Submit>

      </Form>

      <Footer />
    </Container>
  )
}