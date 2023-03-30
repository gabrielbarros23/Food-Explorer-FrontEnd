import { Container, Content, Dishes } from './style'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { useState, useRef } from 'react'
import { useEffect } from 'react'

export function Section({ title, quantity, children, setloading }) {
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0)
    const [currentLoading, setCurrentLoading] = useState(true)
    const position = useRef(0)

    let scrollAmount = 800

    const dishesAmount = quantity.length
    let maxScroll

    if (dishesAmount <= 3) {

        maxScroll = 0

    } else {
        if (dishesAmount == 4) {
            maxScroll = -130

        } else {
            maxScroll = -130
            maxScroll += -1 * (314 * (dishesAmount - 4))

        }
    }

    function scrollHorizontally(val) {
        position.current += (val * scrollAmount)

        if (position.current > 0) {
            position.current = 0
        }
        if (position.current < maxScroll) {
            position.current = maxScroll
        }

        setCurrentScrollPosition(position.current)
    }

    useEffect(() => {
            setCurrentLoading(setloading)
    }, [setloading])
    

    return (
        <Container>
            <p>{title}</p>

            <Content 
                currentLoading={currentLoading} 
                style={{
                    justifyContent: currentLoading? 'center' : 'space-between',
                    
                }}
            >
                <button onClick={() => scrollHorizontally(1)}><RxCaretLeft /> </button>

                <button onClick={() => scrollHorizontally(-1)}><RxCaretRight /></button>

                <Dishes 
                    style={{ 
                        left: currentScrollPosition, 
                        transition: '1s',
                        position: currentLoading? 'static' : 'absolute',
                        justifyContent: currentLoading? 'center' : 'flex-start'
                    }} 
                >
                    {children}
                </Dishes>

            </Content>
        </Container>
    )
}