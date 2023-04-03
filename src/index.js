import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import AppThemeProvider from "./themes/AppThemeProvider"; // 111
import "./index.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
