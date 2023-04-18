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
  grid-area: content;
  padding: 5.6rem 3.5rem;

  >h1{
    display: flex;
    width: 100%;
  }
`