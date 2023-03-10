import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    justify-items: center;

    height: 100vh;
    width: 100%;
    
    padding: 15.8rem 5.0rem 0;

    @media(min-width: 1340px){
        flex-direction: row;
        justify-content: center;

        padding: 14.2rem 10.8rem 14.1rem 15.6rem;
        gap: 30.0rem;
    }
`

export const Logo = styled.div`

    display: flex;
    justify-content: center;

    height: 4.3rem;
    
    margin-bottom: 5.0rem;
    font-size: 1.5rem;

    > img{
        margin-right: 1.0rem;
        width: 4.3rem;
    }

    @media(min-width: 1340px){
        height: 60.0rem;
        width: 30.0rem;
        align-items: center;

    }
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;

    >div:nth-child(3){
        max-width: 60.0rem;
    }

    >div:nth-child(5){
        max-width: 60.0rem;
    }
    
    >div:nth-child(7){
        max-width: 60.0rem;
    }
    
   >label{
        display: flex;

        max-width: 60.0rem;
        width: 100%;

        text-align: left;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    >h1{
        display: none;
    }
    
    > button{
        margin-top: 3.0rem;
        margin-bottom: 4.7rem;
        max-width: 60.0rem;
    }
    
   

    @media(min-width: 1340px){
        
        display: grid;
        
        width: 47.6rem;
        height: 70.0rem;
        padding: 6.4rem;

        background-color: ${({theme}) => theme.COLORS.DARK_700};
      
        >h1{
            display: flex;
            justify-content: center;
            margin-bottom: 3.2rem;
        }
    }
    
`

export const Register = styled.div`
    
    text-align:center;

    >button {
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`
