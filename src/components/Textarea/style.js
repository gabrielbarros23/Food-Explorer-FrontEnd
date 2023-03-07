import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 15.0rem;

    margin: 8px 0 2.4rem;
    padding: 1.6rem;
    border-radius: 8px;
    
    border:none;
    resize:none;
    
    background: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) =>theme.COLORS.WHITE};

    &:placerholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500}
    }
`