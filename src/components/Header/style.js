import styled from "styled-components"

export const Container = styled.div`

    grid-area: header;

    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

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

        .butao{
            border: 1px red solid;
            position: relative;
        }
       
    }
`

export const Logo = styled.div`
    
    display:flex;
    align-items:center;
    justify-content: center;
    
    height: 5.0rem ;
    width: 25.6rem;
    
    font-size: 2.1rem;
    font-weight: 500;
    gap: 1.0rem;
    cursor: pointer;
    transition: all 0.5s ease;
    >img{
        width: 3.0rem;
        transition: all 0.5s ease;

    }
    
    
    @media(min-width: 1100px){
        width: 20.6rem;
        :hover{
            
            >img{
                width: 4.0rem;
            }
            font-size: 2.5rem;
            width: 25.6rem;
            height: 6.6rem ;
            background: linear-gradient(90deg, rgba(8,28,36,1) 54%, rgba(10,40,52,1) 87%);
            border-radius: 10px;
        }
    }
    
`

export const Text = styled.div`

    display:flex;
    align-items:center;
    gap: 1.0rem;

    >span{
        display: ${({ isAdmin }) => isAdmin ? 'flex' : 'none'};
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
    >p{
        color:${({ theme }) => theme.COLORS.WHITE}
    }

    @media(min-width: 1100px){
        
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        
        gap: 0rem;

        >span{
            display: ${({ isAdmin }) => isAdmin ? 'visible' : 'none'};
            color: ${({ theme }) => theme.COLORS.BLUE_200};
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

    visibility: ${({ isAdmin }) => isAdmin ? 'hidden' : 'visible'};
    
    >button:nth-child(1){
        display: ${({ isAdmin }) => isAdmin ? 'none' : 'flex'};
        
        font-size: 3.0rem;
        
        justify-content:center;
        align-items:center;
        text-align:center;
        
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
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

        background-color: ${({ theme }) => theme.COLORS.RED_100};
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
            transition: all 0.5s ease;
            height: 5.6rem;

            background-color: ${({ theme }) => theme.COLORS.RED_100};

            :hover{
                width: 23.5rem;
            }

        }
    }
`

export const Input = styled.div`

    display: none;

    @media(min-width: 1100px){
        position: relative;
        display: flex;
        flex-direction: column;
        width: 59.1rem;
        
        height: 4.8rem;
        
        >input{
            width:100%;
            height: 4.8rem;
            padding-left: 2.0rem;

            border-radius: 5px;
            border: none;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.WHITE};

            ::placeholder{
                padding: 0 14.4rem;
            }
        }


    }
`

export const Search = styled.div`
    display: ${({ inputSelected }) => inputSelected ? 'block' : 'none'};
    position: absolute;
    overflow: hidden;
    overflow-y: auto;

    bottom: -370px;
    width: 59.1rem;
    height: 37.1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 0 0 5px 5px;

    z-index: 3;

    ::-webkit-scrollbar{
        background-color: #1d1d1d;
        width: 0.9rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
    }
`

export const Dish = styled.div`
    display: flex;
    height: 15.0rem;
    margin: 1.5rem 0rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px grey solid;
    .image{
       display: flex;

       justify-content: center;
       align-items: center;
       height: 100%;
       width: 13.0rem;
       
        >img{
            width: 13.0rem;
            height: 13.0rem;
        }
    }

    .text{
        display: flex;
        cursor: pointer;
        
        flex-direction: column;
        width: 37.9rem;
        height: 100%;


        >h3{
            height: 3.0rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        } 
        >p{
            display: flex;
            font-size: 1.9rem;
            height: 5.7rem;
            overflow: hidden;
            text-overflow: ellipsis;

            color: grey;
        }
        >span{
            display: flex;
            justify-content: baseline;
            align-items: center;
            max-width: 41.1rem;
            height: 2.8rem;
            font-size: 2.9rem;
            color: ${({ theme }) => theme.COLORS.BLUE_200};
        }
    }
    .button{
        display: flex;
        flex-direction: center;
        align-items: center;
        width: 6.0rem;
    }
`