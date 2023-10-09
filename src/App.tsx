import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import RoutesComponent from './pages/routes';
import Globalstyle from "./GlobalStyle";

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      {/* <Router> */}
      <RoutesComponent />
      {/* </Router> */}
    </>
  );
}

export default App;