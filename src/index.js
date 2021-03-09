import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Min from './xiaoshiniudao';





ReactDOM.render(<App />,document.getElementById('root'));
ReactDOM.render(<Min />,document.getElementById('root'));




// let n=0;
// const App1 = ()=>React.createElement('div',{className:'red'},[n,
//     React.createElement('button',{onClick:()=>{
//         n+=1
//         ReactDOM.render(App1(),document.getElementById('root'))
//     }},"+1")
// ])
// ReactDOM.render(App1(),document.getElementById('root'));
