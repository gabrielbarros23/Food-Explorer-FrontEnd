import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    
    grid-template-rows: 12.0rem auto 7.3rem;
    grid-template-areas:
    "header"
    "content"
    "footer";

    @media(min-width: 1100px){
        display: none;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;

    height: 12.0rem;
    gap: 1.0rem;
    padding-left: 2.8rem;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    >button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;

        >svg{
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 2.5rem;
        }

    }

    >p{
        font-size: 2.1rem;
    }
`

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 3.6rem 2.8rem 1.3rem;
    gap: 4.0rem;
    
    >div:nth-child(1){
        height: 6.0rem;
        max-width: 90.0rem;
    }
    
`

export const Links = styled.div`
    width: 100%;

    >button:nth-child(1){
        display: ${({isAdmin}) => isAdmin ? 'flex' : 'none'};
    }

    .link{
        display: flex;
        
        width: 100%;
        height: 4.5rem;

        padding-left: 1.0rem;
        font-size:2.4rem;
        margin-bottom: 1.3rem;
        
        color: ${({theme}) => theme.COLORS.LIGHT_300};
   
        border: none;
        background: none;
        border-bottom: 2px solid ${({theme}) =>  theme.COLORS.DARK_1000};
        
    }
`
