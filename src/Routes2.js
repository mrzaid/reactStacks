import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";


class MyRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }
    //fake authentication
    componentDidMount() {
        setTimeout(() => {
            this.setState(
                { login: true }  //setState kay func ko boldia yeh return kardo
            )
        }, 3000);

    }
    render() {
        // const login = this.state.login
        const { login } = this.state
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/dashboard" component={Dahsboard} /> */}
                        <PrivateRoute
                            exact path="/dashboard"
                            login={login}
                            component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

//privateroute function expression bani vi hai
// props object destructuring
// component=props.component componet ko variable mein save kara liya
// ...rest =props...rest
//rest kay andar object araha hai
const PrivateRoute = ({ component: Component, login, ...rest }) => {
    console.log(Component);// component ka pehla word hameisha capital abbut:beita
    console.log(login);

    return (
        //passing key value pair ek ek karkay ayeingi
        //rest ki further destrucuturing
        //path="/dashboard"like this har cheeze bari bari ayegai
        <Route {...rest}
            render={(props) => login ?
                <Component {...props} /> :
                <Redirect to='/' />} />
    )
}

const Home = (props) => {
    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => props.history.push("/dashboard")}>mein home say saman bhejunga</button>
        </div>
    );
}
const Dashboard = (props) => {
    return (
        <div>
            <p>dashboard</p>
            <button onClick={() => props.history.push("/dashboard")}>mein saman bhejunga</button>
        </div>
    );
}
export default MyRouter