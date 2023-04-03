import { Container, Form, IngredientArea, FirstRow, SecondRow, ThirdRow, Submit, Ingredient, Preview } from './style'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import { RxCaretLeft } from 'react-icons/rx'
import { AiFillCamera } from 'react-icons/ai'
import { TextArea, InputConfig, Select, NewIngredientButton, Button, Input, Footer, Header } from '../../components'

export function EditDish() {
  const navigate = useNavigate()
  const params = useParams()
  const { uptadeDish } = useAuth()
  const [dish, setDish] = useState(null)

  const [dishTitle, setDishTitle] = useState('')
  const [dishPrice, setDishPrice] = useState('')
  const [dishCategory, setDishCategory] = useState('')
  const [dishDescription, setDishDescription] = useState('')
  const [dishImage, setDishImage] = useState(null)
  const [dishIngredients, setDishIngredients] = useState([])
  const [newIngredientButton, setNewIngredientButton] = useState([])
  const [loading, setLoading] = useState(false)

  const [options, setOptions] = useState([])

  const [imagePreview, setImagePreview] = useState(false)
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [disableButtonIfPreview, setDisableButtonIfPreview] = useState(false)


  function handleCreateIngredient() {
    if (newIngredientButton.length == 0) {
      return alert('Preencha para adcionar o ingrediente')
    }
    setDishIngredients(prevState => [...prevState, newIngredientButton])
    setNewIngredientButton([])
  }

  function handleRemoveIngredient({ event, ingredient: ingredientTargetRemove }) {
    event.preventDefault()

    const updatedIngredients = dishIngredients.filter(actualIngredient => actualIngredient !== ingredientTargetRemove)

    setDishIngredients(updatedIngredients)
  }

  function handleShowImagePreview(event) {
    event.preventDefault()

    setShowImagePreview(showImagePreview ? false : true);

  }

  function handleSubmit() {
    if (!dishTitle || !dishDescription || !dishCategory || !dishPrice || !dishIngredients) {
      return alert('Preencha Todos os campos.')
    }

    if (newIngredientButton.length !== 0) {
      return alert('Voce não confirmou um ingrediente. clique no mais para adcionar ou limpe o campo.')
    }

    const Confirm = window.confirm('deseja atualizar o prato?')
    if (!Confirm) {
      return
    }
    setLoading(true)

    const categorie = dishCategory.replace('Refeição', 'Refeicao')


    const dataDish = JSON.stringify({
      title: dishTitle,
      price: dishPrice,
      ingredients: dishIngredients,
      description: dishDescription,
      categorie
    })

    const id = params.id

    uptadeDish({ data: dataDish, image: dishImage, id }).then(() => navigate('/')).catch(() => setLoading(false))

    
  }

  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja deletar o prato?")
    setLoading(true)

    if (confirm) {
      await api.delete(`/dishes/${params.id}`).then(() => alert('Prato deletado com sucesso')).catch(() => setLoading(false))
      navigate('/')
    }
  }

  function handleImage(event) {
    const file = event.target.files[0]
    setDishImage(file)

    const imagePreview = URL.createObjectURL(file);
    setImagePreview(imagePreview)
    setDisableButtonIfPreview(true)
    setShowImagePreview(true)

  }


  useEffect(() => {
    async function DishSetup() {
      const dish = await api.get(`/dishes/${params.id}`).then(response => response.data)
      setDish(dish)
      setDishCategory(dish.categorie)
      setDishTitle(dish.title)
      setDishPrice(dish.price)
      setDishIngredients([dish.ingredients])
      setDishDescription(dish.description)

      const image = `${api.defaults.baseURL}/files/${dish.image}`
      setImagePreview(image)

      const option = dish.categorie.replace('Refeicao', 'Refeição')
      setOptions([option])

      const DataIngredients = await api.get(`/ingredient/${params.id}`).then(response => response.data)

      const ingredients = DataIngredients.map((data) => {
        return data.ingredient
      })
      setDishIngredients(ingredients)
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
            <Preview showImagePreview={showImagePreview}>
              <label htmlFor="Image">

                <img src={imagePreview} alt="Preview do prato" />
                <span><AiFillCamera /></span>
                <input type="file" id="Image" onChange={handleImage} />
                <span>clique para adcionar uma imagem</span>

                {showImagePreview &&
                  <label htmlFor="Image">
                    <AiFillCamera />
                  </label>
                }
              </label>

              <button disabled={disableButtonIfPreview} onClick={(event) => handleShowImagePreview(event)}>
                Ver Imagem Atual
              </button>
            </Preview>

            <InputConfig label={'Nome'}>

              <Input
                type="text"
                id="name"
                placeholder={dish.dishTitle}
                value={dishTitle}
                onChange={event => setDishTitle(event.target.value)}
              />

            </InputConfig>

            <InputConfig label={'Categoria'}>

              <Select
                options={options}
                defaultValue={dishCategory}
              />

            </InputConfig>

          </FirstRow>

          <SecondRow>

            <InputConfig label={'Ingredientes'}>

              <IngredientArea>

                {dishIngredients.map((ingredient, index) => (
                  <Ingredient key={index}>
                    {ingredient}
                    <button onClick={(event) => handleRemoveIngredient({ event, ingredient })} > <FiX /> </button>
                  </Ingredient>
                ))}


                <NewIngredientButton
                  placeholder="Adicionar"
                  value={newIngredientButton}
                  onChange={(event) => setNewIngredientButton(event.target.value)}
                  onClick={() => handleCreateIngredient()}
                />

              </IngredientArea>

            </InputConfig>

            <InputConfig label={'Preço'}>

              <Input
                type="number"
                placeholder={dish.price}
                value={dishPrice}
                onChange={event => setDishPrice(event.target.value)}
              />

            </InputConfig>

          </SecondRow>

          <ThirdRow>

            <InputConfig label={'Descrição'}>
              <TextArea
                placeholder={dish.description}
                defaultValue={dishDescription}
                onChange={event => setDishDescription(event.target.value)}
              />
            </InputConfig>

          </ThirdRow>

          <Submit>

            <Button
              title='Excluir prato'
              onClick={() => handleDeleteDish()}
              loading={loading}
            />

            <Button
              title='Salvar alterações'
              onClick={() => handleSubmit()}
              loading={loading}
            />

          </Submit>

        </Form>
      }

      <Footer />
    </Container>
  )
}