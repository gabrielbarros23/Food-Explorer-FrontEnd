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
    padding: 3.6rem 5.6rem 2rem;
    justify-content: start;
    align-items: center;
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

    height: fit-content;
    width: clamp(30.0rem, 60.0rem, 80%);

    
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
        height: 34.0rem;

        align-items:center;
        object-fit: contain;
    }

    @media(min-width: 1100px){
        
        display: grid;
        justify-content: start;
        align-items: flex-start;

        
        width: clamp(10.0rem, 41.0rem, 100%);
        height: 55.0rem;
       

        >img{
            height:38.9rem;
            width: clamp(10.0rem, 39.0rem, 100%);

        }

        >a{
            font-size: 2.4rem;
            font-weight: 700;
        }
    }

`

export const Right = styled.div`

    display: flex;
    flex-direction: column;
    width: clamp(30.0rem, 60.0rem, 80%);
    align-items: center;
    
    
    @media(min-width: 1100px){
        display:flex;
        flex-direction: column;
        width: 68.7rem;
        max-height: 60.0rem;
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

        font-size: 2.9rem;
        font-weight: 700;
        
        justify-content:center;
        text-align: start;

        word-break: keep-all;

        margin-bottom: 2.4rem;
    }

    >p{
        font-size: 1.7rem;
        text-align: center;
        margin-bottom: 2.4rem;
        max-height: 11.0rem;
        overflow: hidden;
        overflow-y: auto;
        color: ${({theme}) => theme.COLORS.GREY_600};

        ::-webkit-scrollbar{
            background-color: #1d1d1d;
            width: 0.9rem;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #5b5b5b;
        }
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
    justify-content: baseline;

    gap: 1.0rem;
    flex-wrap: wrap;
    margin-bottom: 2.2rem;
    width: clamp(10.0rem,40.0rem, 100%);
    
    
    >li{
        height: 4.5rem;
        display: flex;
        
        align-items:center;
        text-align:center;

        list-style: none;
    }

    >li ul {
        padding: 4px 1.0rem;
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
    }
        
    
    
    @media(min-width: 1100px){
        align-items: flex-start;
        justify-content: start;
        margin-bottom: 4.8rem;
        width: clamp(10.0rem,70.0rem, 100%);

        >li ul{
            font-size: 2.0rem;
        }


    }
`

export const Submit = styled.div`
  
    display: flex;
    align-items: center;
    justify-content:center;
    
    gap: 1.6rem;
    width: clamp(10.0rem,30.0rem, 100%);
    
    
    >button{
        font-size: 1.4rem;
        
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



