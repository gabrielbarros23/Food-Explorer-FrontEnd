import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 6.2rem;
    
    @media(min-width: 1100px){
        margin: 10.0rem 0 4.9rem;
        height: 23.2rem;
    }
    
`

export const Content = styled.div`
    display: flex;
    align-items: flex-end;
    
    width: 100%;
    max-width: 65.0rem;
    
    padding-right: 1.6rem;

    @media(min-width: 1100px){
        justify-content: center;
        align-items: center;

        min-width: 100.0rem;
        max-width: 125.0rem;

        padding-left: 5.4rem;
        padding-right: 12.4rem;
    }
    
`

export const Image = styled.div`
    display: flex;
    
    width: 3.0rem;
    height: 15.0rem;
    
    z-index: 1;
    
    @media(max-width: 400px){
        width: 1.0rem;
        height: 12.0rem;
    }

    @media(min-width: 1100px){
        position: relative;

        height: 40.6rem;
        width: 4.0rem;

        >img{
            position: absolute;
            height: 31.0rem;
            bottom: 8.8rem;
        }
    }
`

export const Text = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    
    height:12.0rem;
    width: 100%;

    padding-right: 1.5rem;
    gap: 3px;

    background: linear-gradient(#091E26, #00131C );


    >h1{
        width: 20.2rem;
        font-size: 1.8rem;
        font-weight: 600;
    }
    
    >p{
        font-size: 1.2rem;
        width: 20.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
    
    @media(min-width: 1100px){
        height: 23.0rem;
        padding-right: 10.0rem;

        >h1{
            display: flex;
            justify-content: center;

            width: 48.0rem;
            height: 5.6rem;

            font-size: 3.5rem;
            font-weight: 500;
        }
        
        >p{
            display: flex;
            justify-content: center;

            width: 48.0rem;
            
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

`
