import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    align-items: center;
    
    height: 34.0rem;
    width: 21.0rem;

    padding: 1.0rem 2.4rem;
    margin-right: 1.6rem;

    background-color: ${({theme}) => theme.COLORS.DARK_200};
    
    >h1{
        display: flex;
        justify-content: center;
        
        width: 16.2rem;
        margin-bottom: 1.0rem;

        font-size: 1.4rem;
        font-weight: 500;
        
    }

    >p:nth-child(4){
        display: flex;
        justify-content: center;

        width: 16.2rem;
        font-size: 1.6rem;
        margin-bottom: 2.0rem;
        
        color: ${({theme}) => theme.COLORS.BLUE_200};
    }
    >p:nth-child(3){
       display: none;
    }
    
    >button{
        width: 16.2rem;
        height: 4.2rem;
        
        display: ${({isAdmin}) => isAdmin? 'none' : 'flex'};
    }
    
    
    @media(min-width: 1100px){
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 44.0rem;
        width: 30.5rem;
        
        >h1{
            width: 100%;

            font-weight: 700;
            font-size: 2.0rem;
            margin-bottom: 1.5rem;

            text-align: center;
        }
        >p:nth-child(3){
           display: flex;
           max-height: 12.0rem;
           overflow: hidden;
           
           margin-bottom: 1.5rem;
           justify-content: center;
           text-align: center;
           font-size: 1.4rem;
           
           width: 25.0rem;
        }

        >p:nth-child(4){
            margin-bottom: 1.5rem;
            width: 100%;
            font-size: 2.3rem;
        }
    }
`

export const Image = styled.div`

    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    height: 11.0rem;
    width: 16.2rem;

    margin-bottom: 1.2rem;
    
    >img{
        width: 8.8rem;
        height: 8.8rem;
    }

    >button{
        display: flex;
        position: absolute;

        width: 3.0rem;
        height: 3.0rem;
        font-size: 2.5rem;

        right: 0rem;
        top: 0rem;
        

        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    @media(min-width: 1100px){
        margin-bottom: 1.5rem;
        height: 17.6rem;
        width: 17.6rem;
        >img{
            height: 17.6rem;
            width: 17.6rem;

        }
        >button{
            >svg{
                font-size: 3.0rem;
            }
        }
       
    }
`

export const Amount = styled.div`

    display: ${({isAdmin}) => isAdmin? 'none' : 'flex'};
    
    justify-content: center;
    align-items: center;

    width: 16.2rem;
    margin-bottom: 2.4rem;
    gap: 1.4rem;

    >button{
        display: flex;
        align-items: center;

        font-size: 2.0rem;

        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    @media(min-width: 1100px){
        height: 100%;

        >p{
            font-size: 2.0rem;
        }

        >button{
            >svg{
                font-size: 2.0rem;
            }
        }
    }
`

export const Market = styled.div`
    display: flex;
    flex-direction: column;
    
    @media(min-width: 1100px){
        >button{
            width: ${({isAdmin}) => isAdmin? '22.0rem' : '100%'};
        }
        flex-direction: row;
        gap: 2.0rem;
    }
`