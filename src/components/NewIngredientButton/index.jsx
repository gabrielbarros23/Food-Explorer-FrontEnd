import { Container } from './style'
import { FiPlus } from 'react-icons/fi'
export function NewIngredientButton({ value, onClick, ...rest }) {

    return (
        <Container >

            <input
                type="text"
                value={value}
                {...rest}
            />

            <button type='button' onClick={onClick} >
                {<FiPlus />}
            </button>

        </Container>
    )
}