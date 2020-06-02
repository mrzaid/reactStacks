import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

//METHODS TO BIND ONCLICK EVENTS 
class Home extends Component{
//     myFunc = ()=>{ //arrow func ka apna this nae hota 
//                     //apnay baap ka this uthata hai
// console.log(this)
//     }
        //how to send to parametes
    myFunc () { //arrow func ka apna this nae hota 
        //apnay baap ka this uthata hai
console.log(this)
}
constructor(props){
    super(props)
    this.myFunc=this.myFunc.bind(this)
}
    render(){
        return(
            <div>
<p>HOME AND METHODS TO BIND BUTTON</p>
<button
// onClick={this.myFunc.bind(this)}>

// onClick={ ()=> this.myFunc()}>//jub bhi render chaleiga yeh barr barr bind hongay

onClick={this.myFunc()}>
Click 
</button>




            </div>
        );
    }
}
export default Home