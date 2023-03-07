import styled from 'styled-components'

export const Container = styled.div`

   display: flex;
   flex-direction: column;

   >label{
      color: ${({theme}) => theme.COLORS.LIGHT_400};
   }

`