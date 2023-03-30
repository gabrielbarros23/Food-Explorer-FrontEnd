import { Container, Title, Copyright } from './style'
import { FaRegCopyright } from 'react-icons/fa'
import logo from "../../assets/Polygon grey.svg"


export function Footer() {
    return (
        <Container>
            <Title>
                <img src={logo} alt="Logo Food Explorer" />
                <p>food explorer</p>
            </Title>

            <Copyright>
                <FaRegCopyright />
                <p>2023 - Todos os direitos reservados</p>
            </Copyright>
        </Container>
    )
}