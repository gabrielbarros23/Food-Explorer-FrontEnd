import {Container, Content, Order, Payment, PaymentControls, SelectPaymentMethod, PaymentContent, QRcode, CreditCartForm, NavigationButton, DishesArea} from './style';
import {Header, Footer, Button, DishesCart, InputConfig, BackButton} from '../../components'
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import {AiOutlineCreditCard} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { HiEmojiSad } from 'react-icons/hi'
import QRcodeSrc from '../../assets/QRcode.svg'
import pix from '../../assets/pix.png'

export function Cart(){
  const [cartItems, setCartItems] = useState([])

  const [isInPaymentPhase, setIsInPaymentPhase] = useState(false)
  const [isInCredit, setIsInCredit] = useState(false)

  const [numberCard, setNumberCard] = useState('')
  const [validityCard, setValidityCard] = useState('')
  const [cvcCard, setCvcCard] = useState('')

  const [price, setPrice] = useState(0)
  const navigate = useNavigate()
  const { triggerToUpdateCartIcon} = useAuth()

  async function priceCalculation(cart){
    const promiseWithUserDishesCart = cart.map(dishData => api.get(`dishes/${dishData.dish_id}`).then(response => response.data)) 

    let soma = 0
    const dishes = await Promise.all(promiseWithUserDishesCart) 
    
    dishes.map(dish => (
      soma = dish.price + soma 
    ))

    return soma.toFixed(2)
  }

  function handleNumberCart(number){
    const formattedValue = number.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '); 
    setNumberCard(formattedValue)
  }

  function handleValidityCard(date){
    let formattedDate = date.replace(/\D/g, '').substring(0, 4);
    formattedDate = formattedDate !== '' ? formattedDate.match(/.{1,2}/g).join('/') : '';
    
    setValidityCard(formattedDate)
  }

  function isDateValid(validityString) {
    const [month, year] = validityString.split('/')
    const today = new Date()
    const inputDate = new Date(`20${year}`, month - 1)

    return inputDate > today
  }
  
  async function handleSubmit(){
    if(numberCard.length < 19 || validityCard.length < 5 || cvcCard.length < 3){
      return alert('Preencha os dados completo')
    }

    const monthAndDay = validityCard.split('/')
    if(monthAndDay[0] > 12){
      return alert('Mês inválido')
    }

    if(!isDateValid(validityCard)){
      return alert("Data inválida")
    }

    if(cartItems.length === 0){
      return alert('seu carrinho esta vazio')
    }

    const dish_id = cartItems.map(item => (
      item.dish_id
    ))

    try{
      const order_number = await api.post('/orders', {dish_id}).then(response => response.data)
      await api.post('history', {dish_id, order_number})
      await api.delete('carts')
      
    }catch (error) {
      if (error.response) {
          throw alert(error.response.data.message)
      } else {
          throw alert('Não foi possível buscar o prato.')
      }
    }

  }
    
  useEffect(() => {
    async function getCartByUserId(){
      try{
        const cart = await api.get('/carts').then(response => response.data)
        const price = await priceCalculation(cart)
        
        setCartItems(cart)
        setPrice(price)

      }catch (error) {
        if (error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Não foi possível buscar o item do carrinho')
        }
      }
    }
    
    getCartByUserId()
  }, [triggerToUpdateCartIcon])
  
  return(
    <Container>
      <Header />

      <Content>
        <Order isInPaymentPhase={isInPaymentPhase}>
          <BackButton onClick={() => navigate('/')}/>

          <h1>Meus Pedidos</h1>

          {cartItems.length == 0?(
            <h2>
              Nenhum prato no seu carrinho <HiEmojiSad />
            </h2>
          ) : (
            <DishesArea cartItems={cartItems}>
              {cartItems && 
                cartItems.map(cart => (
                  <DishesCart dish={cart} key={cart.id}/>
                ))
              }
            </DishesArea>
          )}
          
          <p>{`Total: R$ ${price}`}</p>

          <NavigationButton isJustifyContentCenter={true}>
            <Button 
              title='Avançar'
              onClick={() => setIsInPaymentPhase(true)}
              disabled={cartItems.length == 0? true : false}
            />
          </NavigationButton>
        </Order>

        <Payment isInPaymentPhase={isInPaymentPhase} >
          <NavigationButton isJustifyContentCenter={false}>
            <BackButton onClick={() => setIsInPaymentPhase(false)}/>
          </NavigationButton>

          <h1>Pagamento</h1>

          <PaymentControls>
            <SelectPaymentMethod isInCredit={isInCredit}>
              <div className="pix" onClick={() => setIsInCredit(false)}>
                <img src={pix} alt="" /> pix
              </div>

              <div className="credit" onClick={() => setIsInCredit(true)}>
                <AiOutlineCreditCard/> Crédito
              </div>
            </SelectPaymentMethod>

            <PaymentContent>
              <QRcode isInCredit={isInCredit}>
                <img src={QRcodeSrc} alt="QRcode" />
              </QRcode>
              
              <CreditCartForm isInCredit={isInCredit}>
                <form>
                  <InputConfig label={'Número do cartão'}>
                    <input 
                      type="text" 
                      value={numberCard} 
                      onChange={(e) => handleNumberCart(e.target.value)}
                      placeholder='0000 0000 0000'
                      maxLength={19}
                    />
                  </InputConfig>

                  <div className="inLine">
                    <InputConfig label={'Validade'}>
                      <input 
                        type="text" 
                        value={validityCard}
                        onChange={(e) => handleValidityCard(e.target.value)}
                        placeholder='04/25'
                      />
                    </InputConfig>

                    <InputConfig label={'CVC'}>
                      <input 
                        type="text" 
                        value={cvcCard} 
                        onChange={(e) => setCvcCard(e.target.value)}
                        placeholder='000'
                        maxLength={3}
                      />
                    </InputConfig>
                  </div>

                  <Button 
                    title={'Finalizar pagamento'} 
                    onClick={handleSubmit}
                    disabled={!cvcCard  || !validityCard || !numberCard}
                  />
                </form>
              </CreditCartForm>
            </PaymentContent>
          </PaymentControls>
        </Payment>
      </Content>

      <Footer/>
    </Container>
  )
}