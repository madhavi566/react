import React from 'react';
import ReactDOM from 'react-dom/client';

// provide attributes including component compostion using js style 

const Attributes_passing = () => {
    return (
        <div className='title'>
            <h1 key="h1" align="left">attributes including component compostion using js style</h1>
            <h2 key="h2" align="right">attributes including component compostion using js style</h2>
            <marquee>
            <h3 key="h3" >attributes including component compostion using js style</h3>
            </marquee>
        </div>
    )
}

const getRoot = ReactDOM.createRoot(document.getElementById('root'));
getRoot.render(<Attributes_passing/>)