import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";
import GlobalStyles from "./styles/globalstyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/dashboard")}
      >
        <App />
      </ErrorBoundary>
    </>
  </React.StrictMode>
);
