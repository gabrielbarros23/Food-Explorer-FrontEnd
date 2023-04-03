import { Container } from './style'

export function Select({ options, value, onChange }) {

    return (
        <Container>
            <select id='category' value={value} onChange={onChange} >
                {options.map((index) => (
                    <option key={index} value={index}>{index}</option>
                ))}
            </select>
        </Container>
    )
}