import React from "react";

import { ToastContainer } from "react-toastify";

import RoutesMain from "./routes";

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/globalStyles";


const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <GlobalStyles />
      <RoutesMain />
    </>
  );
};

export default App;
