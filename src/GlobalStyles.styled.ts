import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    $transition-ease: all 300ms ease-in-out;

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 42.5%;  /* 100% sẽ bằng 14px --> 42.5% sẽ là 10px */
        line-height: 1.4rem; /* 1rem là 10px --> 1.4 rem = 14px, 1.8rem = 18px(Vì rem kế thừa 42.5% là 10px) --> khi giá trị này tăng --> rem cũng tăng */
        box-sizing: border-box;
    }

    body {
       background-color: #F5F5F5;
    }

`;
export default GlobalStyles;
