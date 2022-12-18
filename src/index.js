
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from './StoreContext';




const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = () => {
  root.render(
      <BrowserRouter>
          <Provider store={store}>
             <App />
          </Provider>
      </BrowserRouter>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});


reportWebVitals();

