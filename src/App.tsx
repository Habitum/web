import React from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Button from "./components/Button";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <GlobalStyles />
    </>
  );
};

export default App;
