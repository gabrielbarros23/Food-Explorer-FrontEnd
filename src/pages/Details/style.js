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
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    grid-area: content;
    padding: 3.6rem 5.6rem 0rem;
    justify-content: start;
    gap: 2.0rem;


    @media(min-width: 1100px){
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
    }


`

export const Left = styled.div`

    max-width: 100.0rem;
    height: fit-content;
    
    >a{
        display:flex;
        
        height: 5.2rem;
        width: 11.0rem;

        font-size: 2.4rem;
        
        align-items:center;
        justify-content: center;
        color: ${({theme}) => theme.COLORS.WHITE};
        
        border: none;
        background: none;
        
        >svg{
            font-size: 2.4rem;
        }
    }
    
    >img{
        display:flex;

        width: 100%;
        height: 30.0rem;

        align-items:center;
        object-fit: contain;
    }

    @media(min-width: 1100px){
        
        display: grid;
        justify-content: start;

        
        width: 40.0rem;
        height: 60.0rem;

        >img{
            height:40.0rem;
            width: 40.0rem;

        }

        >a{
            font-size: 2.4rem;
            font-weight: 700;
        }
    }

`

export const Right = styled.div`

    display: grid;
    width: 100%;
    
    
    @media(min-width: 1100px){
        display:flex;
        flex-direction: column;
        width: 70.0rem;
        height: 60.0rem;
        gap: 0rem;


        justify-content: center;
        align-items: flex-start;
        
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;

        
    >h1{
        display: flex;
        
        max-height: 10.0rem;
        max-width: 100%;

        font-size: 2.7rem;
        font-weight: 500;
        
        justify-content:center;
        text-align: start;

        word-break: keep-all;

        margin-bottom: 2.4rem;
    }

    >p{
        font-size: 1.7rem;
        text-align:center;
        margin-bottom: 2.4rem;
    }

    @media(min-width: 1100px){

        >h1{
            font-size: 4.0rem;
            font-weight: 500;
            justify-content: start;
            margin-bottom: 2.4rem;
        }

        >p{
            text-align: start;
            font-size: 2.4rem;
            margin-bottom: 2.4rem;

        }

    }
`

export const IngredientsArea = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

    gap: 2.0rem;
    flex-wrap: wrap;
    margin-bottom: 5.2rem;
    
    
    >li{
        display:flex;
        height: 4.5rem;
        
        align-items:center;
        text-align:center;

        list-style: none;
    }

    >li ul {
        padding: 4px 1.0rem;
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
    }
        
    

    @media(min-width: 110.0rem){
        align-items: flex-start;
        justify-content: start;
        margin-bottom: 4.8rem;

    }
`

export const Submit = styled.div`
  
    display: flex;
    align-items: center;
    justify-content:center;
    
    gap: 1.6rem;

    >button{
        font-size: 1.4rem;
        max-width: 25.0rem;
        height: 4.7rem;
    }
    
    
        


    @media(min-width: 1100px){
        justify-content: start;

        >button{
            height: 5.5rem;
            width: 18.0rem;
            font-size: 1.7rem;
        }
    }
`

export const Amount = styled.div`
    
    display: ${({isAdmin}) => isAdmin ? 'none' : 'flex'};

    justify-content:center;
    text-align: center;
    align-items: center;

    font-size:2.2rem;
    gap: 1.0rem;


    >button{
        border: none;
        background:none;
        color: ${({theme}) => theme.COLORS.WHITE}
    }

    @media(min-width: 1100px){
        font-size: 3.0rem;
        >button{
            font-size: 3.0rem;
        }
    }
        
`



