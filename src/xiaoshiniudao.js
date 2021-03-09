import React from 'react';
import "./styles.css"

//函数组件
function min() {
    return(
        <div className="App">
            爸爸
            <Son />
        </div>
    )
}

//类组件
class Son extends React.Component{
    constructor(){
        super();
        this.state={
            n:0
        };
    }
    add(){
        this.setState({n: this.state.n+1})
    }
    render(){
        return(
            <div className="Son">
                儿子 n: {this.state.n}
                <button onClick={()=>this.add()}>+1</button>
                <GrandSon />
            </div>
        )
    }
}

//元素组件
const GrandSon = ()=> {
    //这是析构赋值
    const [n,setN] = React.useState(0);
    return(
        <div className="GrandSon">
            孙子 n: {n}
            <button onClick={()=>setN(n+1)}>+1</button>
        </div>
    )
}

export default min;

