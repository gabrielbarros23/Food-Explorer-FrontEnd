import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  
  width: 10.0rem;
  height: 4.0rem;
  font-size: 2.0rem;
  
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.WHITE};

  >svg{
    font-size: 2.5rem;
  }
`