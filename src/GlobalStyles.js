import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

/* -------------------- FONTS START -------------------- */

/* leckerli-one-regular - latin */
@font-face {
  font-family: 'Leckerli One';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/leckerli-one-v16-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/leckerli-one-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/leckerli-one-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/leckerli-one-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/leckerli-one-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/leckerli-one-v16-latin-regular.svg#LeckerliOne') format('svg'); /* Legacy iOS */
}

/* roboto-300 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v30-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v30-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v30-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v30-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}

/* -------------------- FONTS END -------------------- */

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

    --font-primary: 'Leckerli One', cursive;
    --font-secondary: 'Roboto', sans-serif;
}

body {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.5;
    background-color: var(--light-primary);
}

button, input {
    font-size: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
`;
