import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement("h1", { id: "title" }, "Heading1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading2");
const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(container);