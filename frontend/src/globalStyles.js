import { createGlobalStyle } from "styled-components";
import defaultTheme from "./components/Theme";
export default createGlobalStyle`
  body {
    font-family: TitlingGothicFB Normal, Work Sans;
  };

  #root{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  body, div, nav, img, ul, li, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  };

  ul{
    list-style-type: none;
    list-style: none;
  };

  li{
    height: 2rem;
  };

  img{
    display: cover;
  }; 

  h1{
    font-size:${defaultTheme.fontSize[6]};
    font-weight:${defaultTheme.fontWeight.heading};
    font-family: ${defaultTheme.fonts.heading};
  };

  h2{
    font-size:${defaultTheme.fontSize[5]};
    font-weight:${defaultTheme.fontWeight.bold};
    font-family: ${defaultTheme.fonts.heading};
  };

  h3{
    font-size:${defaultTheme.fontSize[4]};
    font-weight:${defaultTheme.fontWeight.subheading};
    font-family: ${defaultTheme.fonts.heading};

  }

  h4{
    font-size:${defaultTheme.fontSize[3]};
    font-weight:${defaultTheme.fontWeight.subheading};
    font-family: ${defaultTheme.fonts.heading};

  };

  h5{
    font-size:${defaultTheme.fontSize[2]};
    font-weight:${defaultTheme.fontWeight.subheading};
    font-family: ${defaultTheme.fonts.body};

  };

  h6{
    font-size:${defaultTheme.fontSize[1]};
    font-weight:${defaultTheme.fontWeight.body};
    font-family: ${defaultTheme.fonts.body};

  };

  p{
    font-size:${defaultTheme.fontSize[2]};
    font-weight:${defaultTheme.fontWeight.body};
    font-family: ${defaultTheme.fonts.body};

  };

  a{
    font-weight:${defaultTheme.fontWeight.subheading};
    text-decoration: none;
  };
  a:visited {
    color: #000;
  };
`;
