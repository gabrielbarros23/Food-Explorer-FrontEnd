import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    height: 40.0rem;
    width: 100%;

    gap: 2.4rem;
    
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;

    
    >p{
        font-size: 1.8rem;
    }
    
    @media(min-width: 1100px){
        height: 50.0rem;
        padding-left: 0rem;
        
        justify-content: center;
        align-items: center;

        >p{
            width: 110.0rem;
            max-width: 117.0rem;
        }
    }   
`

export const Content = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    overflow-x: auto;
    border-bottom: 3px solid ${({theme}) => theme.COLORS.DARK_900};
    
   
    height: 34.0rem;

    >button{
        display: none;
    }
    
    @media(min-width: 1100px){
        
        height: 46.2rem;
        width: 110.0rem;

        max-width: 127.0rem;
        gap: 2.0rem;
        
        align-items: center;
        overflow: hidden;

        >button{
            display: flex;
            
            width: 3.0rem;
            z-index: 1;
            
            
            color: ${({ theme }) => theme.COLORS.WHITE};
            background: ${({theme}) => theme.COLORS.DARK_600};
            border: none;

            >svg{
                font-size: 3.5rem;
            }
        }   
    }       
`

export const Dishes = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    

    @media(min-width: 1100px){
        max-width: 89.1rem;
    }
    

`