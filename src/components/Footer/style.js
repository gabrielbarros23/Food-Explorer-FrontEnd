import styled from 'styled-components'

export const Container = styled.div`
    grid-area: footer;
    
    display: flex;
    align-items:center;
    justify-content: space-between;
    
    width:100%;
    height: 7.3rem;
    padding: 0 2.0rem;

    word-break: normal;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
`

export const Title = styled.div`
    
    display: flex;
    
    height: 3.0rem;

    gap: 6px;
    font-size: 1.6rem;
    padding: 0 1px;

    font-weight: 700;

    align-items:center;

    color: ${({theme}) => theme.COLORS.LIGHT_700};
    
    @media (max-width: 410px){
        font-size: 1.1rem ;
    }
`

export const Copyright = styled.div`
    
    display: flex;
    padding: 0 1px;

    align-items: center;

    gap: 6px;
    font-size: 1.2rem;
    

    @media (max-width: 410px){

        font-size: 1.1rem ;
    }
`