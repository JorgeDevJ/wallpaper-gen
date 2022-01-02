import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *::after, *::before{
        box-sizing: inherit;
    }
    html, body{
        margin: 0;
        padding: 0;
        
font-family: 'Lato', sans-serif;
    }
    body{
        font-size: 16px;
    }
    .button{
        border: none;
        background: #000;
        border-radius: 5px;
        outline: none;
        padding: 15px;
        color: #fff;
        font-size: 22px;
        margin: 15px;
        width: 70%;
    }
`;

export default Global;
