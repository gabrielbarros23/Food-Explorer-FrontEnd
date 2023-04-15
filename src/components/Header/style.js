import styled from "styled-components"

export const Container = styled.div`

    grid-area: header;

    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    
    width: 100%;
    height: 12.0rem;
    padding: 0 1.5rem;
    gap: 20px;
    
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

export const Logo = styled.div`
    
    display:flex;
    align-items:center;
    justify-content: center;

    
    height: 5.0rem ;
    width:clap(10.0rem, 24.0rem, 100%);

    
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
        width:29.6rem;
        
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

export const AlternativeInput = styled.div`
    display: flex;
    position: relative;

    gap: 20px;

    width: 3.7rem;
    height: 5.5rem;

    justify-content:center;
    align-items:center;
    text-align:center;

    visibility: ${({ isAdmin }) => isAdmin ? 'hidden' : 'visible'};

    .cart{

        >button{
            display: ${({ isAdmin }) => isAdmin ? 'none' : 'flex'};
            
            font-size: 3.0rem;
            
            justify-content:center;
            align-items:center;
            text-align:center;
            
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.WHITE};
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
    }

    .desktopCart{
        display: none;
    }

    .history{
        display: none;
    }

    .favorite{
       display:none;
    }


    @media(min-width: 1100px){
        
        visibility: visible;
        width: clamp(2.0rem, 50.6rem, 100%);
        justify-content: space-between;


        .cart{
            display: none;
        }

        .history{
            display: ${({ isAdmin }) => isAdmin ? 'none' : 'flex'};
            >button{
                display: flex;
                justify-content: center;
                align-items: center;
                
                border-radius: 5px;
                font-size: 1.4rem;
                transition: all 0.5s ease;
                height: 5.6rem;
                width: 15.5rem;

                background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

                :hover{
                    width: 19.5rem;
                }
            }
        }

        .desktopCart{
            display: ${({ isAdmin }) => isAdmin ? 'none' : 'flex'};

            >button{
            display: flex;
            justify-content: center;
            align-items: center;
            
            border-radius: 5px;
            font-size: 1.4rem;
            transition: all 0.5s ease;
            height: 5.6rem;
            width: 15.5rem;

            background-color: ${({ theme }) => theme.COLORS.RED_100};

            :hover{
                width: 22.5rem;
            }

        }
        }

        

        .favorite{
            display: ${({ isAdmin }) => isAdmin ? 'none' : 'flex'};
            >button{
                display: flex;
                justify-content: center;
                align-items: center;
                
                border-radius: 5px;
                font-size: 1.4rem;
                transition: all 0.5s ease;
                height: 5.6rem;
                width: 15.5rem;

                background-color: ${({ theme }) => theme.COLORS.YELLOW_610};

                :hover{
                    width: 19.5rem;
                }
            }
        }
    }
`

export const Search = styled.div`

    display: none;

    @media(min-width: 1100px){
        display: flex;
        flex-direction: column;
        position: relative;

        width: clamp(1.0rem, 59.1rem, 100%);
        height: 4.8rem;
        
        >input{
            width:100%;
            height: 4.8rem;
            padding-left: 2.0rem;

            border-radius: 5px;
            border: none;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.WHITE};
        }


    }
`

export const Dropdown = styled.div`
    position: absolute;
    overflow: hidden;
    overflow-y: auto;

    bottom: -50.0rem;
    width: clamp(1.0rem, 59.1rem, 100%);
    height: 50.1rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 0 0 5px 5px;
    z-index: 5;

    ::-webkit-scrollbar{
        background-color: ${({ theme }) => theme.COLORS.GREY_100};
        width: 0.9rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
`

export const Dish = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 15.0rem;
    width: 100%;

    border-bottom:${({ theme }) => `1px ${theme.COLORS.LIGHT_600} solid`};


    .image{
       display: flex;
       
       justify-content: center;
       align-items: center;

       height: 100%;
       width: 13.0rem;

       cursor: pointer;
       
        >img{
            width: 13.0rem;
            height: 13.0rem;
        }
    }

    .text{
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;

        height: 100%;
        max-width: 37.9rem;

        cursor: pointer;

        >h3{
            display: flex;
            align-items: center;
            height: 10.0rem;
            width: 100%;
            overflow: hidden;
        
        } 

        >p{
            display: flex;

            font-size: 1.9rem;
            height: 5.7rem;

            overflow: hidden;
            
            width: 100%;
            border: 1px red solid;

            color: ${({ theme }) => theme.COLORS.GREY_600};
        }

        >span{
            display: flex;
            justify-content: baseline;
            align-items: center;

            width: 100%;

            height: 4.8rem;
            font-size: 2.4rem;
            
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