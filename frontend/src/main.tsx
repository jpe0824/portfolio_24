import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Header from "./pages/header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
