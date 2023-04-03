import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    
    height: 50.0rem;
    width: 100%;

    gap: 2.4rem;
    
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;

    
    >p{
        font-size: 2.5rem;

    }
    
    @media(min-width: 1100px){
        height: 50.0rem;
        padding-left: 0rem;
        
        justify-content: center;
        align-items: center;

        >p{
            width: 110.0rem;
            max-width: 117.0rem;
            font-size: 2.5rem;
            font-weight: 500;
        }
    }   
`

export const Content = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: ${({ theme }) => '0 0 10px' + theme.COLORS.DARK_1000};
    
    height: 36.5rem;

    ::-webkit-scrollbar{
        background-color: #1d1d1d;
        height: 0.9rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
    }

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
            display: ${({ loadingIsTrue }) => loadingIsTrue ? 'none' : 'flex'};
            
            width: 3.0rem;
            z-index: 1;
            
            
            color: ${({ theme }) => theme.COLORS.WHITE};
            background: ${({ theme }) => theme.COLORS.DARK_600};
            border: none;

            >svg{
                font-size: 3.5rem;
            }
        }   
    }       
`

export const Dishes = styled.div`
    display: flex;
    justify-content: ${({ loading }) => loading ? 'center' : 'center'};
    align-items: center;
    position: ${({ loading }) => loading ? 'static' : 'absolute'};

    @media(min-width: 1100px){
        max-width: 89.1rem;
    }
`