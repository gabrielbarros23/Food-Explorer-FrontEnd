import { Container, Content, Dishes } from './style'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { useState } from 'react'
import { useEffect } from 'react'

export function Section({ title, dishQuantity, children, setloading }) {
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0)
    const [loadingIsTrue, setLoadingIsTrue] = useState(true)

    let scrollAmount = 800

    const dishesAmount = dishQuantity.length
    let maxScroll

    if(dishesAmount <= 3){
        maxScroll = 0
    }

    if(dishesAmount <= 4){
        maxScroll = -130
    }else{
        maxScroll = -130 + (-1 * (314 * (dishesAmount - 4)))
    }

    function scrollHorizontally(val) {
       const direction = (val * scrollAmount)
       const scroll = direction + currentScrollPosition

        if (scroll > 0) {
            return setCurrentScrollPosition(0)
        }

        if (scroll < maxScroll) {
            return setCurrentScrollPosition(maxScroll)
        }

        setCurrentScrollPosition(scroll)
    }

    useEffect(() => {
        setLoadingIsTrue(setloading)
    }, [setloading])
    

    return (
        <Container>
            <p>{title}</p>

            <Content 
                loadingIsTrue={loadingIsTrue} 
                style={{
                    justifyContent: loadingIsTrue? 'center' : 'space-between',
                }}
            >
                <button onClick={() => scrollHorizontally(1)}><RxCaretLeft /> </button>

                <button onClick={() => scrollHorizontally(-1)}><RxCaretRight /></button>

                <Dishes 
                    style={{ 
                        left: currentScrollPosition, 
                        transition: '1s',
                        position: loadingIsTrue? 'static' : 'absolute',
                        justifyContent: loadingIsTrue? 'center' : 'flex-start'
                    }} 
                >
                    {children}
                </Dishes>

            </Content>
        </Container>
    )
}