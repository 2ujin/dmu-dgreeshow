import React from 'react';
import { BrowserRouter as HashRouter } from "react-router-dom";
import RoutesComponent from './pages/routes';
import Globalstyle from './GlobalStyle';
import ScrollTop from "./components/scrollToTop";

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      <HashRouter>
        <ScrollTop />
        <RoutesComponent />
      </HashRouter>
    </>
  );
}

export default App;