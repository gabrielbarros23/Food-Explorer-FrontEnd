import { Container, Content } from './style'
import { Ring } from '@uiball/loaders'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { Header, Footer, Banner, Section, Dishes } from '../../components'

export function Home() {
   const { searchCategory } = useAuth()

   const [meal, setMeal] = useState([])
   const [drinks, setDrinks] = useState([])
   const [desserts, setDesserts] = useState([])
   const [loading, setLoading] = useState(true)

   async function dishesSetup() {
      const drink = await searchCategory('Bebida')
      const meal = await searchCategory('Refeicao')
      const desserts = await searchCategory('Sobremesa')

      setDrinks(drink.data)
      setMeal(meal.data)
      setDesserts(desserts.data)
   }

   useEffect(() => {
      dishesSetup().then(() => setLoading(false))

   }, [])


   return (
      <Container>
         <Header />

         <Content>
            <Banner />

            <Section title='Refeições' dishQuantity={meal} setloading={loading}>

               {
                  loading ?
                     <Ring
                        size={60}
                        lineWeight={5}
                        speed={2}
                        color="white"

                     />
                     :
                     meal.map((meal) => (
                        <Dishes
                           key={meal.id}
                           data={meal}
                        />
                     ))

               }

            </Section>

            <Section title='Sobremesas' dishQuantity={desserts} setloading={loading}>

               {
                  loading ?
                     <Ring
                        size={60}
                        lineWeight={5}
                        speed={2}
                        color="white"

                     />
                     :
                     desserts.map((dessert) => (
                        <Dishes
                           key={dessert.id}
                           data={dessert}
                        />
                     ))
               }

            </Section>

            <Section title='Bebidas' dishQuantity={drinks} setloading={loading}>

               {
                  loading ?
                     <Ring
                        size={60}
                        lineWeight={5}
                        speed={2}
                        color="white"

                     />
                     :
                     drinks.map((drink) => (
                        <Dishes
                           key={drink.id}
                           data={drink}
                        />
                     ))
               }

            </Section>

         </Content>

         <Footer />

      </Container>
   )
}