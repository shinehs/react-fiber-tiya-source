// import React from 'react';
// import ReactDOM from 'react-dom';
import * as  React from 'react';
import * as ReactDOM from 'react-dom';


// const Demo = () => {
//   React.useEffect(()=>{
//     console.log(document.getElementById('root')._reactRootContainer._internalRoot.current)
//   })

//   return (<div className="parent">
//   <div className="child1" style={{border: '4px solid green'}}>
//     <div className="child1-A">A</div>
//     <div className="child1-B">B</div>
//   </div>
//   <div className="child2" style={{border: '4px solid blue',marginTop:'10px'}}>
//     <div className="C">C</div>
//   </div>
// </div>)
// }
// ReactDOM.render(<Demo/>,document.getElementById('root'));

const demoElement = (<div className="parent">
<div className="child1" style={{border: '4px solid green'}}>
  <div className="child1-A">A</div>
  <div className="child1-B">B</div>
</div>
<div className="child2" style={{border: '4px solid blue',marginTop:'10px'}}>
  <div className="child2-C">C</div>
</div>
</div>)

debugger

ReactDOM.render(demoElement,document.getElementById('root'));


