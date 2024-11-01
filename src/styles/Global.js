import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #f7f9fc;
  --secondary: #15181c;
  --gray: #d9d9d9;
  --gray-ligth: #e5e1dc;
  --blue: #4766ff;
  --white: #fff;
  --black: #000;
  --shade: #efefef;
}

body {
  background-color: var(--primary);
  color: var(--secondary);
  font-family: "Poppins", serif;
}

ul, nav {
  list-style-type: none;
}

a {
  text-decoration: none;
}
`