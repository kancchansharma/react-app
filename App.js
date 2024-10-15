import React from 'react'
import ReactDOM  from 'react-dom'

let div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Hello  Sibling 1"),
    React.createElement("h2", { id: "h2" }, "Hello Sibling 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "Hello child2 sibling 1"),
    React.createElement("h2", { id: "h2" }, "Hello child2 sibling 2"),
  ]),
]);
// const h1 = React.createElement("h1", { id: "header" }, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
