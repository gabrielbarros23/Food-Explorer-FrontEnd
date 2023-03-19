import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 12.0rem auto 7.3rem;
    grid-template-areas: 
    "header" 
    "form" 
    "footer";
`

export const Form = styled.form`
    display: grid ;
    grid-area: form;
    padding: 1.0rem 3.2rem 0;

    >a{
        display: flex;
        align-items: center;
        
        height: 2.3rem;
        width: 9.0rem;
        font-size: 2.0rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        background: none;

        >svg{
            width: 2.2rem;
            height: 2.3rem;
        }
    }

    >h1{
        margin-bottom: 2.0rem;
        margin-top: 2.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
    
    @media(min-width: 1100px){
        padding: 1.0rem 12.5rem 9.0rem 12.3rem;
        
        animation: scale-in-center 1s ease forwards;

            @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
        }
}
  
`

export const Preview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.0rem;
    
    >label{
        position: relative;
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        width: 17.8rem;
        height: 18.8rem;

        cursor: pointer;

        >input{
            display: none;
        }

        >label{
            position: absolute;
            display: flex;
            
            justify-content: center;
            align-items: center;

            width: 3.5rem;
            height: 3.5rem;

            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.LIGHT_700};

            right: 0px;
            bottom: 2px;

            cursor: pointer;

            >input{
                display: none;
            }

            >svg{
                color: ${({theme}) => theme.COLORS.WHITE};
            }
        }
       
        >img{
            position: absolute;
            width: 18.8rem;
            height: 18.8rem;
            
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            border: 1px white solid;        
        }
        
        >span{
            display: ${({previewIsNull}) => previewIsNull? 'block': 'none'};

            svg{
                font-size: 8.0rem;
            }
        }
    }
   
    
    @media(min-width: 1100px){
        >label{
            width: 20.8rem;
            height: 20.8rem;
            
            >img{
                width: 20.8rem;
                height: 20.8rem;
            }
        }
    }
`

export const IngredientArea = styled.div`
    display: flex;

    width:100%;
    height: auto;
    min-height: 5.5rem;

    padding: 8px;
    gap: 1.6rem;
    
    margin-bottom: 2.0rem;
    margin-top: 1.0rem;

    align-items: center;
    text-align:center;
    flex-wrap: wrap;
    
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius:1.0rem;
`

export const Submit = styled.div`
    display: flex;
    justify-content: end;

    button{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};
        margin-bottom: 5.3rem;
    }

    @media(min-width: 1100px){
        >button{
            max-width: 20.0rem;
            margin-bottom: 0rem;
            margin-top: 1.0rem;
        }
    }

`

export const FirstRow = styled.div`
   @media(min-width: 1100px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        >div:nth-child(2){
            width: 50%;
        }
        
        >div:nth-child(3){
            width: 20%;
        }

    }
    
`

export const SecondRow = styled.div`
    @media(min-width: 1100px){
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        >div:nth-child(1){
            width: 80%;
        }
        >div:nth-child(2){
            width: 15%;
        }
       
    }

`
    
export const ThirdRow = styled.div`
    @media(min-width: 1100px){
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
`

export const Ingredient = styled.div`
    display: flex;
    
    height: 3.5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.LIGHT_600};
    list-style: none;
    >p{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.0rem;

        padding: 8px 1.0rem;

        >button{
            display: flex;
            background: none;
            border: none;
            justify-content: center;
            align-items: center;

            width: 2.0rem;
            height: 3.0rem;
            >svg{
                color: ${({theme}) => theme.COLORS.WHITE};
            }
            
        }

    }

`


