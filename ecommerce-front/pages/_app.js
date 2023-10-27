import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "./components/CartContext/CartContext";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

  body{
    background-color: #edf5f7;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
