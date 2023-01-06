import React from 'react'
import ReactDOM from 'react-dom/client'

const container = (
      <div className='title'>
          <h1 key="h1">Heading1 using jsx</h1>
          <h2 key="h2">Heading1 using jsx</h2>
          <h3 key="h3">Heading1 using jsx</h3>
      </div>
  )

  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

  reactRoot.render(container);
