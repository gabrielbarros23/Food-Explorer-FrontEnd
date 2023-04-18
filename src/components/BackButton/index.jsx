import {Container} from './style'
import {RxCaretLeft} from 'react-icons/rx'

export function BackButton({...rest}){
  return(
    <Container {...rest}>
      <RxCaretLeft /> Voltar 
    </Container>
  )
}