import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    margin-bottom: 2.0rem;
    margin-top: 1.0rem;
    border-radius:1.0rem;

    > input {
        ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;


        &:placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500}
        }
    }

    > svg{
        margin-left: 1.6rem;
        color: ${({theme}) => theme.COLORS.WHITE}
    }
`