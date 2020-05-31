import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// class App4donumber extends Component{
//     render(){
// return(

// <div>
// <h5> this is do number 2nd component</h5>

// </div>



// )}
// }

class Beita extends Component{
    state = {
        text:this.props.num
    }
static getDerivedStateFromProps(props){
        return(
            { 
                text:props.num
            }
        )
    }
    render(){
        return(
<div>
<h1>Beita</h1>
<h1>The State Number Right now is {this.state.text}</h1>

</div>
        )
    }
}
class App3 extends Component{
    state={  //state ahmeisha iss tarah hi initialize hoti hai
        number:0,
    }  // constructor(props){//yeh only once chaleiga
    //     super(props)
    //     this.state.number = 125; //we are just assigning a new value  }
    componentWillUnmount(){
        // console.log("bye bye jubba")
        alert("are sure you want to leave")
    }
    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState(()=>({
        //         number: Math.ceil(Math.random(1000)*1000)
        //     })
        //     )
        //                 //for donumber component khel  
        //                // ReactDOM.render(
        //                 //     <React.StrictMode>
        //                       //      <App4donumber/>
        //                      //     </React.StrictMode>
        //                      //     ,document.getElementById('root')
        //                                                 //   );
        //      },3000)

             //another way by passig object directly in setState function
    //     this.setState( ( {number: Math.ceil(Math.random(1000)*1000) } )
    // },5000)

    //FETCHING DATA FOR MORE THAN ONCE
    setInterval(()=>{
        this.setState(()=>({
            number: Math.ceil(Math.random(1000)*1000)
        })
        )
         },3000)



    }
    render() {
        console.log(this.state.number);
        return(
            <div>
               {/* <h1>The State Number Right now is {this.state.number}</h1> */}
                <Beita num={this.state.number}/>
            </div>
        );
    }
} 
export default App3