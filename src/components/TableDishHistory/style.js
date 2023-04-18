import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;  

  padding: 2.4rem;
  gap: 16px;

  color: ${({theme}) => theme.COLORS.LIGHT_400};
  border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 1.0rem;

  .info{
    display: flex;
    width: 100%;
    gap: 20px;
  }

  .details{
    display: flex;

    max-height: 10.0rem;
    width: 100%;

    overflow: hidden;
    overflow-y: auto;
  }
  
  .status{
    width: 100%;
      
    >select{
      width: 100%;
      height: 5.6rem;

      padding: 5px;
      font-size: 1.7rem;

      margin-top: 1.0rem;
      margin-bottom: 2.0rem;

      outline: none;
      border: 0;
      border-radius: 5px;
      background-color: ${({theme}) => theme.COLORS.DARK_900};
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  @media(min-width: 1100px){
    display: none;
  }
`

export const Desktop = styled.div`
  display: none;

  @media(min-width: 1100px){
    display: flex;

    table{
      width: 100%;
      border-collapse: collapse;
      
      td {
        padding: 8px;
        border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
      
      th{
        padding: 8px;
        border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
      }
    }
  }
`