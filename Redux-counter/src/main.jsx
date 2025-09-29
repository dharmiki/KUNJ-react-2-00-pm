import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import redux store + provider
import { Provider } from "react-redux";
import { stor } from "./storage/store";  // make sure path is correct

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={stor}>
      <App />
    </Provider>
  </StrictMode>
);
