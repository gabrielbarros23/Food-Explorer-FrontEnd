import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 36.0rem;
    width: 21.0rem;

    padding: 0rem 2.4rem;
    margin-right: 1.6rem;

    background-color: ${({theme}) => theme.COLORS.DARK_200};
    
    >h1{
        display: flex;
        justify-content: center;
        text-align: center;

        font-size: 1.4rem;
        
        height: 3.1rem;
        
        width: 19.2rem;
        overflow: hidden;
        margin-bottom: 1.0rem;

        font-size: 1.7rem;
        font-weight: 500;

    }

    >p:nth-child(4){
        display: flex;
        justify-content: center;

        width: 16.2rem;
        font-size: 2.2rem;
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
           height: 4.0rem;
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

    width: 15.8rem;
    height: 15.8rem;

    margin-bottom: 1.2rem;
    
    >img{
        width: 13.8rem;
        height: 13.8rem;
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
    margin-bottom: 1.4rem;
    gap: 1.4rem;

    >button{
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: none;
        background: none;
        color: ${({theme}) => theme.COLORS.WHITE};

        >svg{
            font-size: 2.0rem;
        }
    }

    @media(min-width: 1100px){
        height: 100%;

        >p{
            font-size: 2.0rem;
        }
       
    }
`

export const Market = styled.div`
    display: flex;
    flex-direction: column;
    button{
        width: 17.0rem;
        margin-bottom: 1.0rem;
    }
    
    @media(min-width: 1100px){
        button{
            width: ${({isAdmin}) => isAdmin? '22.0rem' : '100%'};
        }
        flex-direction: row;
        gap: 2.0rem;
    }
`