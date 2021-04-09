import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html {
    overflow: hidden;
    
@media only screen and (max-width: 800px) {
    overflow: auto;
overflow-x: scroll !important;
}
}
body {
 
   
   background: linear-gradient(to right top ,#FCF6F5FF ,white);
}


`
export default GlobalStyle;