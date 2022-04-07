import { createGlobalStyle } from "styled-components";
import PoppinsLight from "./assets/fonts/Poppins-Light.ttf";
import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "./assets/fonts/Poppins-Bold.ttf";


const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 300;
    src: url(${PoppinsLight}) format ('truetype');
  }
  
    @font-face {
        font-family: 'Poppins';
        font-weight: 400;
        src: url(${PoppinsRegular}) format ('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-weight: 500;
        src: url(${PoppinsMedium}) format ('woff');
    }

    @font-face {
        font-family: 'Poppins';
        font-weight: 700;
        src: url(${PoppinsBold}) format ('woff');
    }
`

export default FontStyles