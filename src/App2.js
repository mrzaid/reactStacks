import React, {Component}  from 'react';

            //only one
// class App2 extends Component{

//  state = {text: "hallo"}
// whenChange = (event) => {
//         this.setState({text: event.target.value })
//     }
//   render(){
//       return(
//           <div> <span>
//               <input type = "text" value={this.state.text}
//                onChange={this.whenChange}/>
//       <p>
//           {this.state.text}
//           </p>   
//           </span>
//           <span>
//               <input type = "text" value={this.state.text}
//                onChange={this.whenChange}/>
//       <p>
//           {this.state.text}
//           </p>   
//           </span>
//           </div>
//       )
//   }  
// }
// export default App2


        //more than one
class App2 extends Component{

 state = {
lname: "",
fname: ""}
whenChange = (event) => {
    //console.log(event.target.name);
    //console.dir(event.target.value);
    console.log(this)
    const {name,value} = event.target //destructuring
    // const name = event.target.name;
    // const value = event.target.value;
                    //this [will get values] 
    this.setState({ [name]:value })
    }





        //shayad chalay
    // whenChange = {event.target.name,event.target.fname} => {
    //     //console.log(event.target.name);
    //     //console.dir(event.target.value);
    //     console.log(this)
    //     const {name,value} = event.target //destructuring
    //     // const name = event.target.name;
    //     // const value = event.target.value;
    //                     //this [will get values] 
    //     this.setState({ [name]:value })
    //     }    
  render(){
      return(
          <div> <span>
              <input placeholder="type name" type = "text" value={this.state.lname} name="lname"
               onChange={this.whenChange}/>
      <p>
          {this.state.lname}
          </p>   
          </span> 
          <span>
              <input placeholder="type name" type = "text" value={this.state.fname} name="fname"
               onChange={this.whenChange}/>
      <p>
          {this.state.fname}
          </p>   
          </span>
          </div>
      )
  }  
}
export default App2
























