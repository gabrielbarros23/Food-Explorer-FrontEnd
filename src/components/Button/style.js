import styled from 'styled-components'


export const Container = styled.button`
    
    display: flex;

    width: 100%;
    height: 5.6rem;
    
    gap: 1.0rem;
    font-weight: 500;

    justify-content:center;
    align-items:center;
    text-align:center;

    background-color: ${({theme}) => theme.COLORS.RED_100};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: 0;
    border-radius: 5px;
    
    &:disabled {
        opacity: 0.5
    }
`