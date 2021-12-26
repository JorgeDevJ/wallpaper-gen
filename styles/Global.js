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
    }
    body{
        font-size: 16px;
    }
`;

export default Global;
