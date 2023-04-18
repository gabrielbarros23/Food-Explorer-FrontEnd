import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  margin-bottom: 2.0rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 1.0rem;
  

  .image{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    >img{
      width: 8.0rem;
      height: 8.0rem;
    }
  }

  .text{
    display: flex;
    justify-content: center;
    flex-direction: column;
    >h2{
      font-size: 2.0rem;
      font-weight: 200;
      cursor: pointer;
      >span{
       display: none;
      }
    }

    >span{
      color: ${({theme}) => theme.COLORS.TOMATO_400};
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

  @media(min-width: 1100px){
    .text{
      >h2{
        >span{
          color: ${({theme}) => theme.COLORS.LIGHT_400};
          font-size: 12px;
        }
      }
    }
  }
`