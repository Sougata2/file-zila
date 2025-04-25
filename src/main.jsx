import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./AppState/store.js";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster richColors={true} position={"top-right"} />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
