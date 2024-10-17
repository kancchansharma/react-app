import React from 'react'
import ReactDOM  from 'react-dom/client'

const title = 'My App'
const header = React.createElement('div',{id:'Heading'},'Helo React App by createElement')
console.log(header)

const jsxHeader = <h1>Hello React</h1>
console.log(jsxHeader)

const HeadingComponent = ()=> <h1>Heading 1</h1>

const DivComponent = () => (
  <div id="container">
    {title}
    <HeadingComponent/>
    {HeadingComponent() }
    <h1>Hello React First App</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DivComponent/>);
