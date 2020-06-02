import React, { Component } from 'react'
import Practice from './Practice'
import { render } from '@testing-library/react'
import Router from './Route'
import MyRouter from './Routes2'
import Home from './binding'

// var obj = new Practice ("zaid").render() //object pass karta hai usmein parent type and child props
// console.log(obj)
class App4 extends Component {
    state = {

    }
    render(){        //jsx expect kar raha hai
        return(
            <div>       
            {/* {obj} */}
          {/* {<Practice/>} */}
             {/* <Router />            */}
            {/* <MyRouter/> */}
            <Home/>
            </div>
        );
    }
}
export default App4