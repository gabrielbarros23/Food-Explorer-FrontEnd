import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 12.0rem auto 7.3rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    
    `

export const Content = styled.div`
    display: grid;
    grid-area: content;

`
