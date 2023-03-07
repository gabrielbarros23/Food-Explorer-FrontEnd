import {Container} from './style'
import {useState } from 'react'

export function Select({options, value, onChange, disabled}){

    const [newOptions, setNewOptions] = useState(options) 



    return(
        <Container>
                <select id='category' value={value} onChange={onChange} >
                    {newOptions.map((index) => (
                        <option key={index} value={index}>{index}</option>
                    ))}
                </select>
        </Container>
    )
}