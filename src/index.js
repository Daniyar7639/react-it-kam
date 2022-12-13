
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.subscriber (rerenderEntireTree);


rerenderEntireTree(store.getState());
reportWebVitals();
