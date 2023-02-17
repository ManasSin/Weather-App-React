import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// ! things to do
// todo
// * check the time of day and change bg accordingly
// * make grid looking cards
// * apply hover property to card to flip the card
// * on click to card a modal should open.
// * change the card bg according to the weather if suny then sunny and so on
// * get time of user using 'timezone.json' in url

// ? things remainding
// * figure out how seach button should look like.
// * can save user location and refresh it on reload ... use localStorage.
// * when we save user data make a drop down for quick toggel

// ! what will be in the main ui section
// * i'll show hour prediction
// *

// ! thinga to learn
// How to write inline style in react and also variable
// local storage in react,
