import {Container, Content} from './style'
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'
import {useState, useEffect} from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Banner} from '../../components/Banner'
import {Section} from '../../components/Section'
import {Dishes} from '../../components/Dishes'




export function Home() {
    const {searchCategory} = useAuth()

    const [search, setSearch] = useState('')
    const [meal, setMeal] = useState([])
    const [drinks, setDrinks] = useState([])
    const [desserts, setDesserts] = useState([])
    const [data, setData] = useState([])

    async function dishesSetup(){
        const drink = await searchCategory('Bebida')
        const meal = await searchCategory('Refeicao')
        const desserts = await searchCategory('Sobremesa')


        setDrinks(drink.data)
        setMeal(meal.data)
        setDesserts(desserts.data)
        
    }
    
    useEffect(() =>{
        dishesSetup()
      
    }, [])
    
    useEffect(() => {
        async function fecthDishes () {
            const response = await api.get(`/dishes?search=${search}`)
            const data = response.data

            setData(data)
        }
        fecthDishes()
    }, [search])
    
    
    return(
        <Container>
            <Header value={search} onChange={e => setSearch(e.target.value)}/>

            <Content>
                <Banner/>

                <Section title='Refeições' quantity={meal}>
                       
                    {meal.map((meal) => (
                    <Dishes
                        key={meal.id}
                        data={meal}
                    />
                    ))}
                   
                  

                </Section>

                
                    
                <Section title='Sobremesas' quantity={desserts}>
                    
                    { desserts.map((dessert) => (
                        <Dishes 
                            key={dessert.id}
                            data={dessert}
                        />
                    ))}
                    
                </Section>

                <Section title='Bebidas' quantity={drinks}>
                    
                    { drinks.map((drink) => (
                        <Dishes 
                            key={drink.id}
                            data={drink}
                        />
                    ))}
                    
                </Section>
               
            </Content>

            <Footer/>

        </Container>
    )
}