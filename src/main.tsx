import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ApiContextProvider from "./Contexts/ApiContext.tsx";
import { Provider } from 'react-redux'
import { store } from "./Redux/store.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiContextProvider>
  </StrictMode>,
);
