import {Container} from './style'
import {BsUpload} from 'react-icons/bs'

export function FileInput({placeholder, onChange}) {
    return(
        <Container>
            <label htmlFor="File"> <BsUpload/> {placeholder}</label>
            <input type="file" id="File" onChange={onChange}/>
        </Container>
    )
}