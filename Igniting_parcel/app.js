import React from 'react'
import ReactDOM from 'react-dom/client'

 const heading1 = React.createElement(
  "h1",
  { key:'h1' },
  "Heading1 using react.create element");

  const heading2 = React.createElement(
  "h2",
  { key:'h2' },
  "Heading2 using react.create element");

  const heading3 = React.createElement(
  "h3",
  { key:'h3' },
  "Heading3 using react.create element");


  const container = React.createElement(
  "div",
  { className: "title" }, 
  [heading1,heading2,heading3]
  );

  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

  reactRoot.render(container);
