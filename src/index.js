
import reportWebVitals from './reportWebVitals';
import state, { subscriber } from './redux/state';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";
import { addMessage } from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addMessage={addMessage}
         updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};

subscriber (rerenderEntireTree);


rerenderEntireTree(state);
reportWebVitals();
