import styled from "styled-components"

export const Container = styled.div`

    grid-area: header;

    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    height: 12.0rem;
    padding: 0 1.5rem;
    
    align-items:center; 
    
    >button{
        font-size: 2.5rem;
        height:2.6rem;

        background: none;
        border: none;
    }

    @media(min-width: 1100px){

        padding: 0 3.0rem;
        
        >button:nth-child(1){
            display: none;
        }
       
    }
`

export const Logo = styled.button`
    
    display:flex;
    align-items:center;
    justify-content: center;
    
    height: 5.6rem ;
    font-size: 2.1rem;
    font-weight: 500;
    gap: 1.0rem;

    >img{
        width: 3.0rem;
    }

    
`

export const Text = styled.div`

    display:flex;
    align-items:center;
    gap: 1.0rem;

    >span{
        display: ${({isAdmin}) => isAdmin ? 'flex' : 'none'};
        font-size: 1.5rem;
        color: ${({theme}) => theme.COLORS.BLUE_200};
    }
    >p{
        color:${({theme}) => theme.COLORS.WHITE}
    }

    @media(min-width: 1100px){
        
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        
        gap: 0rem;

        >span{
            display: ${({isAdmin}) => isAdmin ? 'visible' : 'none'};
            color: ${({theme}) => theme.COLORS.BLUE_200};
        }

    }
    
`

export const LeaveIcon = styled.div`
    
    display: none;

    @media(min-width: 1100px){
        
        display: flex;

        >button{
            background: none;
            border: none;
        }
    }
`

export const Cart = styled.div`
   
    display: flex;
    flex-direction: column;
    position: relative;

    width: 3.7rem;
    height: 5.5rem;

    justify-content:center;
    align-items:center;
    text-align:center;

    visibility: ${({isAdmin}) => isAdmin ? 'hidden' : 'visible'};
    
    >button:nth-child(1){
        display: ${({isAdmin}) => isAdmin ? 'none' : 'flex'};
        
        font-size: 3.0rem;
        
        justify-content:center;
        align-items:center;
        text-align:center;
        
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    >button:nth-child(3){
        display: none;
    }

    
    
    >label{
        position: absolute;
        
        height: 2.5rem;
        width: 2.5rem;
        top: 0;
        right: 0;

        background-color: ${({theme}) => theme.COLORS.RED_100};
        border-radius: 50%;
    }


    @media(min-width: 1100px){
        
        visibility: visible;
        width: 21.6rem;

        >button:nth-child(1){
            display: none;
        }

        >label{
            display: none;
        }
        
        >button:nth-child(3){
            display: flex;
            
            border-radius: 5px;
            font-size: 1.4rem;

            background-color: ${({theme}) => theme.COLORS.RED_100};
        }
    }
`

export const Input = styled.div`

    display: none;

    @media(min-width: 1100px){
        display: flex;
        width: 59.1rem;

        >input{
            width:100%;
            height: 4.8rem;
            padding-left: 2.0rem;

            border-radius: 5px;
            border: none;
            background-color: ${({theme}) => theme.COLORS.DARK_900};
            color: ${({theme}) => theme.COLORS.WHITE};

            ::placeholder{
                padding: 0 14.4rem;
            }
        }
    }
`