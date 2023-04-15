import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  
  grid-template-rows: 12.0rem auto 7.3rem;
  grid-template-areas: 
  "header" 
  "content" 
  "footer";
`

export const Content = styled.div`
  display: grid;
  grid-area: content;
  padding: 2.6rem 3.7rem 2rem 3.5rem;

  @media(min-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: self-start;

    gap: 75px;
  }
`

export const Order = styled.div`
  display: ${({isInPaymentPhase}) => isInPaymentPhase? 'none' : 'flex'};
  flex-direction: column;

  >h1{
    margin-bottom: 2.0rem;
    font-weight: 500;
  }

  >h2{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40.0rem;
    font-size: 2.0rem;
    gap: 1.0rem;

    color: ${({theme}) => theme.COLORS.LIGHT_600};
  }

  >p{
    font-size: 2.0rem;
    margin-bottom: 1.0rem;
  }

  >button{
    max-width: 80.0rem;
  }

  @media(min-width: 1100px){
    display: flex;
    flex-direction: column;

    width: 44.4rem;
    height: 73.0rem;
  }
  
`
export const DishesArea = styled.div`
  max-height: 50.0rem;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar{
    background-color: #1d1d1d;
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #5b5b5b;
  }

  @media(min-width: 1100px){
    max-height: 80.0rem;
  }
`

export const NavigationButton = styled.div`
  display: flex;
  justify-content: ${({isJustifyContentCenter}) => isJustifyContentCenter? 'center' : 'start'};
  width: 100%;
  
  @media(min-width: 1100px){
    display: none; 
  }
`

export const Payment = styled.div`
  display: ${({isInPaymentPhase}) => isInPaymentPhase? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;

  position: relative;
  
  >h1{
    margin-bottom: 2.0rem;
    width: 100%;
  }

  @media(min-width: 1100px){
    display: flex;
    width: 56.2rem;

    >h1{
      max-width: 56.2rem;
    }
  }
`


export const PaymentControls = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 50.0rem;
  height: 46.3rem;
  
  border-radius: 1.0rem;
  border: ${({theme}) => `1px ${theme.COLORS.LIGHT_600} solid`};

  @media(min-width: 1100px){
    max-width: 56.2rem;
  }
`

export const SelectPaymentMethod = styled.div`
  display: flex;
  height: 8.1rem;
  border-bottom: ${({theme}) => `1px ${theme.COLORS.LIGHT_600} solid`};

  .pix{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 50%;
    gap: 5px;
    font-size: 2.0rem;

    background-color: ${({theme, isInCredit}) => isInCredit ? theme.COLORS.DARK_500 : theme.COLORS.DARK_800};
    border-top-left-radius: 1.0rem;
    border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    cursor: pointer;
    
    >img{
      width: 3.0rem;
      height: 3.0rem;
    }
  }
  .credit{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 50%;

    gap: 5px;
    font-size: 2.0rem;

    background-color: ${({theme, isInCredit}) => isInCredit ? theme.COLORS.DARK_800 : theme.COLORS.DARK_500};
    border-top-right-radius: 10px;
    cursor: pointer;

    >svg{
      width: 3.0rem;
      height: 3.0rem;
    }
  }
`

export const PaymentContent = styled.div`
  height: 80%;
  width: 100%;
`

export const QRcode = styled.div`
  display: ${({isInCredit}) => isInCredit ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  >img{
    height: 80%;
    width: 80%;
  }
`

export const CreditCartForm = styled.div`
  display: ${({isInCredit}) => isInCredit ? 'flex' : 'none'};

  height: 100%;
  width: 100%;
  padding: 4.0rem 2.0rem;
   
  >form{
    height: 100%;
    width: 100%;
    
    >div:nth-child(1){
      width: 100%;
      margin-bottom: 2.0rem;

      >input{
        width: 100%;
        height: 4.8rem;
        padding-left: 1.0rem;

        background: none;
        border: ${({theme}) => `1px ${theme.COLORS.LIGHT_300} solid`};
        border-radius: 5px;
        color: ${({theme}) => theme.COLORS.WHITE};

        ::placeholder{
          color:${({theme}) => theme.COLORS.LIGHT_500};
        }
      }
    }
    
  }

  .inLine{
    display: flex;

    width: 100%;
    gap: 1.7rem;
    margin-bottom: 4.0rem;

    >div:nth-child(1){
      flex: 1;

      min-width: 4.0rem;
      max-width: 50%;

      >input{
        width: 100%;
        height: 4.8rem;
        padding-left: 1.0rem;

        background: none;
        border: ${({theme}) => `1px ${theme.COLORS.LIGHT_300} solid`};
        color: ${({theme}) => theme.COLORS.WHITE};
        border-radius: 5px;

        ::placeholder{
          color:${({theme}) => theme.COLORS.LIGHT_500};
        }
      }
      
    }

    >div:nth-child(2){
      flex: 1;

      min-width: 4.0rem;
      max-width: 50%;
      
      >input{
        width: 100%;
        height: 4.8rem;
        padding-left: 1.0rem;

        background: none;
        border: ${({theme}) => `1px ${theme.COLORS.LIGHT_300} solid`};
        color: ${({theme}) => theme.COLORS.WHITE};
        border-radius: 5px;

        ::placeholder{
          color:${({theme}) => theme.COLORS.LIGHT_500};
        }
      }

    }
  }
`

