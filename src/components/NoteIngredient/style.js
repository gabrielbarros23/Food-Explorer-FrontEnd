import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    max-width: 11.8rem;
    resize: horizontal;
    
    background-color: ${({theme}) => theme.COLORS.DARK_900 };
    color: ${({theme}) => theme.COLORS.GREY_600};

    border-radius: 8px;
    border: 2px dashed ${({theme}) => theme.COLORS.GREY_600 };


    > button{
        display: flex;
        width: 1.5rem;
        
        border:none;
        background: none;

        color: ${({theme}) => theme.COLORS.WHITE}
    }
    
    > input {
        display: block;
        justify-content: center;
        
        height: 3.2rem;
        width: 100%;
        resize: horizontal;
        
        padding-left: 1.2rem;
        margin-right:8px;
        
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        
        border: none;
        
        &:placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300}
        }
    }
`