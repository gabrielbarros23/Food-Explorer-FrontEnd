import {Container, Content, Dishes} from './style'
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'
import { useState, useRef} from 'react'

export function Section({title,quantity, children}){
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0)
    const position = useRef(0)

    let scrollAmount = 320

    const dishesAmount = quantity.length
    let maxScroll  
    
    if(dishesAmount <= 3){
        
        maxScroll = 0
        
    }else{
        if(dishesAmount == 4){
            maxScroll = -130
            
        }else{
            maxScroll = -130
            maxScroll += -1 * (314  *(dishesAmount - 4 ))
            
        }
    }
    
    
    
    function scrollHorizontally(val){
        position.current += (val * scrollAmount)
        
        if(position.current > 0){
            position.current = 0
        }
        if(position.current < maxScroll){
            position.current = maxScroll
        }
        
        setCurrentScrollPosition(position.current)
    }
   
    
    return(
        <Container>
            <p>{title}</p>
            
            <Content >
                <button onClick={() => scrollHorizontally(1)}><RxCaretLeft/> </button>

                <button onClick={() => scrollHorizontally(-1)}><RxCaretRight/></button>
                
                <Dishes style={{left: currentScrollPosition, transition: '1s'}}>
                 {children}
                </Dishes>

            </Content>
        </Container>
    )
}