import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   for (let prop in reactElement.props) {
//     // console.log(reactElement.props[prop])
//     if(prop==="children") continue;
//     domElement.setAttribute(prop, reactElement.props[prop]);
//   }
//   domElement.innerHTML = reactElement.children;
//   container.appendChild(domElement);
// }

// let ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click here to redirect to Google",
// };
// let anotherElement =(
//   <a href="https://www.google.com" target="_blank">
//     Click here to redirect to Google
//   </a>

// )
// const mainContainer = document.getElementById("root");
// customRender(reactElement, mainContainer);

// function MyName(){
//   return (
//     <h1>Prajwol Karki is My Name</h1>
//   )
// }
const randomVar = "MrMasukoJhol";
const reactElement = React.createElement(
  'a',
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Click here to redirect to Google | Prajwol",
  randomVar
)
ReactDOM.createRoot( document.getElementById("root")).
render(

  // <MyName/>
  // ReactElement
  // anotherElement
  reactElement

  )
