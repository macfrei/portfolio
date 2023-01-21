import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
}

:root {
    --primary-blue: #209cee;
    --secondary-silver: #7093bc;
    --light-primary: #f0faff;
    --light-green: #e6f4f1;
}

body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
}

button, input {
    font-size: inherit;
}
`;
