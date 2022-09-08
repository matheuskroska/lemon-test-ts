import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ThemeProvider as ContextAPI} from "./context/context";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </React.StrictMode>
);
