import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 12.0rem auto 7.3rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    
`

export const Content = styled.div`
    display: grid;
    grid-area:content;
    padding: 2.0rem 0rem 0rem 4.0rem;

    >button{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        width: 10.0rem;
        font-size: 2.0rem;
        
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};

        >svg{
            font-size: 2.5rem;
        }
    }

    >h1{
        display: flex;
        align-items: center; 
        justify-content: flex-start;
        
        height: 9.0rem;
        width: 100%;
    }

    >h2{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 50.0rem;
        width: auto;
        gap: 2.0rem;

        color: ${({theme}) => theme.COLORS.LIGHT_600};

        >svg{
            width: 10.0rem;
            height: 5.0rem;
            font-size: 4.5rem;
        }
    }

    >li{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        list-style: none;
        
        gap: 4.0rem;
        width: clamp(10.0rem, 100.0rem, 100%);
    }
   
    
    
    @media(min-width:1100px){
        display: flex;
        flex-direction: column;
        padding-left: 9.0rem;

        >li{
            justify-content: flex-start;
            width: 100%;
        }

        h1{
            height: 10.0rem;
        }

        >h2{
            height: 50.0rem;
        }
       
    }
`