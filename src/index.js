import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Theme from "theme.ts";
import PageRouter from "Pages/PageRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { initFirebase } from "./firebase.js";

import "./index.css";

// const [app, analytics] = initFirebase();
//Get current user
//Save to "context/redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      {/* { user ?  <PageRouter /> : <LogIn /> } */}
      <PageRouter />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
