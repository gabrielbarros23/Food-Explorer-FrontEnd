import styled from 'styled-components'

export const Container = styled.div`
    
    >select{
        width: 100%;
        height: 5.6rem;

        padding: 5px;
        font-size: 1.7rem;

        margin-top: 1.0rem;
        margin-bottom: 2.0rem;

        outline: none;
        border: none;
        border-radius: 5px;
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`