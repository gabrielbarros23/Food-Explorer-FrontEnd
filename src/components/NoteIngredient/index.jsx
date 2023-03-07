import { Container } from './style'
import { FiPlus, FiX} from 'react-icons/fi'
export function NoteIngredient({ isNew=false , value, onClick, ...rest}) {
    
    return(
        <Container isNew={isNew}>

            <input
                type="text" 
                value={value} 
                {...rest}
            />

            <button type='button' onClick={onClick} > 
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
            
        </Container>
    )
}