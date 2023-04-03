import styled from 'styled-components'

export const Container = styled.ul`
    
    display: flex;

    justify-content:flex-start;
    align-items: center;

    width: clamp(10.0rem, 40.0rem,100%);
    gap: 1.0rem;

    margin-bottom:2.0rem;
    border-radius: 1.0rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    box-shadow: 0rem 0rem 1.7rem 0rem #0D161B;

    >img{
        width: 12.0rem;
        height: 12.0rem;
        cursor: pointer;
    }
    
    .text{
        display: flex;
        flex-direction: column;
        width: clamp(40%,70%,100%);

        >h3{
            width: clamp(40%,75%,100%);
            max-height: 20.0rem;
            cursor: pointer;
        }
        >span{
            cursor: pointer;

            color:red
        }
    }
    
    @media(min-width:1100px){
        width: 40.0rem;
        gap: 1.2rem;
    }
`