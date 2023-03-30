import {Container, Content, Image, Text} from './style'
import Macaron from '../../assets/ImageBanner.svg'

export function Banner(){
    return(
        <Container>
            <Content>

                <Image>
                    <img src={Macaron} alt="Macaron"/>
                </Image>
                
                <Text>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </Text>
                
            </Content>
        </Container>
    )
}