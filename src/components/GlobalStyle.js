import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap");
    html{  
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-size: 100%;
        color: #212121;
        box-sizing: border-box;
    }
    *,*::before, *::after{
        box-sizing: inherit;
    }
    body{
        margin: 0;
    }
`

export default GlobalStyle
