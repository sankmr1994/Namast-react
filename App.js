import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = React.createElement("h1", { id: "heading" }, "React heading💥");

console.log(heading);

//JSX
const headingUsingJSX = <h1 id="heading">React heading using JSX💥</h1>;

console.log(headingUsingJSX);

//Functional Component
const TitleComponent = () => <h1>React Title</h1>;

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1 id="heading">React heading using Functional Component💥</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingUsingJSX);
root.render(<HeadingComponent />);
