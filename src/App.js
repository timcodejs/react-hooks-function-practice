import './App.css';
import Main from './pages/main';
import ContextProvider from './reducer';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Main />
    </ContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    font-family: sans-serif;
  }
`