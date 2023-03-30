import styled from 'styled-components'

export const Container = styled.div`
    height: 5.0rem;
    margin-bottom: 2.0rem;
    margin-top: 1.0rem;
    border: 1px blue solid;

    
    >label{
        display: flex;
        align-items: center ;
        border: 1px red solid;

        height: 100%;
        width: 100%;

        border-radius: 5px;
        padding-left: 1.5rem;

        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        >svg{
            width: 3.0rem;
            border: none;
        }
    }
    
   >input{
        display: none;
    }



`