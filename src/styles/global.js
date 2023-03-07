import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoting: antialiased;        
    }

    body, input, textarea, button {
        font-family: 'Poppins', serif;
        font-size: 1.6rem;
        outline: none;
    } 

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }


`;