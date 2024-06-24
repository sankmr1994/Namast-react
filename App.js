import React from "react";
import ReactDOM from "react-dom/client";

// const h1 = React.createElement("h1", { id: "heading" }, "Hello from react!");
// console.log(h1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Iam child1 React Heading H1"),
    React.createElement("h2", { id: "heading2" }, "Iam child1 H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Iam child2 React Heading H1"),
    React.createElement("h2", { id: "heading2" }, "Iam child2 H2"),
  ]),
]);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
console.log(rootElement);
rootElement.render(parent);
