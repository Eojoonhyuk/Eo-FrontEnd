import Login from "./pages/Login";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Login/>
    </div>
  );
}

export default App;

