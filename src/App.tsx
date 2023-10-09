import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import RoutesComponent from './pages/routes';
import Globalstyle from './GlobalStyle';
import ScrollTop from "./components/scrollToTop";

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      {/* <Router> */}
      {/* <ScrollTop /> */}
      <RoutesComponent />
      {/* </Router> */}
    </>
  );
}

export default App;