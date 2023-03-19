import { Container } from './style'

export function InputConfig({ icon: Icon, label, children, ...rest}) {
    return(
        <Container>
            <label htmlFor="">{label}</label>
            
            {children}
        </Container>
    )
}