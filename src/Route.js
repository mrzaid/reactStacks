//this is class 4


import React, { Component } from "react";
import { BrowserRouter, Route,Switch ,Link } from "react-router-dom";
//histroy provide kareiga un chezon ki}
            //  {//jo constant rakhni hain}  
            //                   {like navbar wageira yahan daalo}
class Router extends Component {

    render() {
        return (
            <BrowserRouter>
            <div>  
            <Navbar/>
            <Switch>
            <Route exact path="/" component={Root} /> 
            <Route exact  path="/home" component={Home} />
            {/* <Route exact path="/contact-us" component={Contact} /> */}
            <Route exact path="/contact-us/:id" component={Contact} />

            </Switch>
           </div>    
            </BrowserRouter>
        )
    }
}
const Navbar = ()=>{
    return(
        
        <div>
        <Link to="/">Main</Link>
        <Link to="/home">HOME</Link>
        <Link to="/contact-us">Contact-Us</Link>
        </div>
    );
}
const Root = ()=>{
    return("HELLO FROM ROOT & HOME PAGE");
}
//home jub call hoga tou browser oruter issay props pass kareiga
//history go forwarf
const Home = (props) => {
    console.log(props)
    return (
        <div>
        "HELLO FROM HOMEPAGE"
        {/* <button onClick={()=>props.history.push("/contact-us")}>Click ME</button> */}
        {/* <button onClick={()=>props.history.replace("/contact-us")}>Click ME</button> */}
        <button onClick={()=>props.history.push({pathname:"/contact-us/12345", state:{name:"zaid",}})}>Click ME</button>
        </div>
    );
}
const Contact = (props) => {
    console.log(props)
    return (
        "HELLO FROM CONTACT US COMPONENT"
    )
}



export default Router  