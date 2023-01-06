import react from "react";
import reactDom from "react-dom/client";

const Component1 = () => (
<h1 key="h1">
    h1 from component 1 as a functional compoenent
</h1>
)

const component2 = () => (
    <h2 key="h2">
        h2 from component 2 as a function
    </h2>
    )
const component3 =  (
    <h3 key="h3">
        h3 from component 3 as a js variable
    </h3>
    )

    
const Component4 = () => {
    return (
<div className="title">
<Component1/>
{component2()}
{component3}
</div>
    )
}

const getRoot = reactDom.createRoot(document.getElementById('root'));
// working getRoot.render(<Component4/>)
getRoot.render(Component4())