import { Container } from './style'

export function InputConfig({ label, children, ...rest}) {
    return(
        <Container>
            <label htmlFor="">{label}</label>
            
            {children}
        </Container>
    )
}