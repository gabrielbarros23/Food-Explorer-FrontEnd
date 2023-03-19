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
    flex-direction: column;
    gap: 2.0rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.0rem;
    
    >button{
        width: 25.0rem;
        height: 4.9rem;
        border: 0;
        background: none;
        background-color: ${({theme, showPreview}) => showPreview? theme.COLORS.LIGHT_650 : theme.COLORS.LIGHT_700};
        opacity: ${({showPreview}) => showPreview? '0.5' : '1'};
        color: white;
        border-radius: 10px;
    }
    
    >label{
        position: relative;
        display: flex;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px white solid;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


        width: 18.8rem;
        height: 18.8rem;

        cursor: pointer;

        >input{
            display: none;
        }

        
        >img{
            display: ${({showPreview}) => showPreview ? 'block' : 'none'};
            width: 18.8rem;
            height: 18.8rem;
            
        }
        
        >span{
            display: ${({showPreview}) => showPreview? 'none' : 'flex'};
            
            svg{
                font-size: 8.0rem;
            }
        }

        >label{
            position: absolute;
            
            display: flex;
            
            justify-content: center;
            align-items: center;
            
            width: 3.8rem;
            height: 3.8rem;
            
            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.LIGHT_700};
            
            right: 0px;
            bottom: 2px;
            
            cursor: pointer;
            
            >input{
                display: none;
            }

            >svg{
                font-size: 2.5rem;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
        }
    }
   
    
    @media(min-width: 1100px){
        >label{
            width: 21.0rem;
            height: 21.0rem;
            border: 1px white solid;

            @keyframes scale-in-center {
            0% {
                -webkit-transform: scale(0);
                transform: scale(0);
                opacity: 1;
            }
            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
                opacity: 1;
            }
            }


            >label{
                display: none;
            }
            
            >img{
                animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

                display: ${({showPreview}) => showPreview ? 'block' : 'none'};

                width: 20.7rem;
                height: 20.7rem;
            }
            
            >span{
                display: ${({showPreview}) => showPreview? 'none' : 'flex'};
                animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

            }
            
            :hover{
                >span{
                    display: none;
                }
                >img{
                    display: flex;
                }
            }
        }
    }
`

export const IngredientArea = styled.div`
    display: flex;

    width:100%;
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
    gap: 3.2rem;

    button:nth-child(1){
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        margin-bottom: 5.3rem;
    }
    button:nth-child(2){
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};
        margin-bottom: 5.3rem;
    }

    @media(min-width: 1100px){
        >button:nth-child(1){
            max-width: 13.5rem;
            margin-bottom: 0rem;
            margin-top: 1.0rem;
        }
        >button:nth-child(2){
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
    >p{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.0rem;

        padding: 8px 10px;

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

