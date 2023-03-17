import styled from 'styled-components'

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;


    height: 100vh;
    width: 100%;
    
    padding: 15.8rem 5.0rem 0;

    @media(min-width: 1100px){
        flex-direction: row;
        justify-content: center;

        padding: 0;
    }
`

export const Logo = styled.div`

    display: flex;
    justify-content: center;

    height: 4.3rem;
    width: clamp( 1.9rem, 85.6rem, 100% );

    margin-bottom: 5.0rem;
    font-size: 1.8rem;

    animation: slide-in-left 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @keyframes slide-in-left {
    0% {
        -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    }


    > img{
        margin-right: 1.0rem;
        width: 4.3rem;
    }

    @media(min-width: 1100px){
        height: 60.0rem;
        width: 30.0rem;
        align-items: center;
        margin-bottom: 0;
        margin-right: clamp(1rem, 10vw, 30.0rem);

    }
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp( 1.9rem, 85.6rem, 100% );

    animation: slide-in-right 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   
    @keyframes slide-in-right {0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0;
        }100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
    }

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
    
   

    @media(min-width: 1100px){
        
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
