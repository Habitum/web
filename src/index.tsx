import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext/UserContext";
import { HabitsProvider } from "./contexts/HabitsContext/HabitsContext";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <HabitsProvider>
          <App />
        </HabitsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
