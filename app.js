const heading1 = React.createElement('h1',{id:'title'},"Heading1");
const heading2 = React.createElement('h2',{id:'title'},"Heading2");
const container = React.createElement('div',{class:'container'},[heading1,heading2]);
const reactRoot = ReactDOM.createRoot(document.getElementById('root'))
reactRoot.render(container);
