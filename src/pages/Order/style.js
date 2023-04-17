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