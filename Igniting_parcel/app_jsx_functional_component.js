import React from 'react';
import ReactDOM from 'react-dom/client';

// create a  functional compoenent  arrow WITHOUT  RETURN

const Rawjsxfunction = () => (
<div className='title'>
  <h1 key="h1">functional compoenent  arrow WITHOUT  RETURN</h1> 
  <h2 key="h2">functional compoenent  arrow WITHOUT  RETURN</h2>
  <h3 key="h3">functional compoenent  arrow WITHOUT  RETURN</h3>
</div>
)

// create a  normal variable    
const normal = <div className='title'><h1 key="h1"> heading 1 normal varaiblle</h1><h2 key="h2"> heading 1 normal varaiblle</h2><h3 key="h3"> heading 3 normal varaiblle</h3> </div>
    
// functional component of div with class title and h1,h2,h3
const Nestedheader = () => {
return (
    <div className='title'>
        <h1 key="h1">Heading1 using functional component WITH RETURN</h1>
        <h2 key="h2">Heading2 using functional component WITH RETURN</h2>
        <h3 key="h3">Heading3 using functional component WITH RETURN</h3>
    </div>
)
} 


// functional component of div with class title and h1,h2,h3 without return and paranthesis
// const Nestedheader1 = () => (
//         <div className='title'><h1 key="h1">Heading1 using functional component without return</h1><h2 key="h2">Heading2 using functional component</h2><h3 key="h3">Heading3 using functional component</h3></div>
//     ) 

const getRoot = ReactDOM.createRoot(document.getElementById('root'));
// getRoot.render(<Rawjsxfunction/>)
getRoot.render(<Nestedheader/>)
