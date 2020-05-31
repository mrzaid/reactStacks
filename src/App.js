import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HELLO REACT JANI
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         hello react baap is here
//         </a>
//       </header>
//     </div>
//   );
// }
         


//CLASS 2 STARTS FROM APP.JS SCHEMES

        //first coding practice class 2
// class App extends Component {
// render(){
//   const cityNames = ["karachi","lahore","faislabad","multan"];
// return(
// <ul>
//  {
//    cityNames.map((n)=> <li key = {n}> {n}     
//    </li>)
//  }
// </ul>
// )
// }

// }



            //old code read only //slides maal
// class App extends Component {
//   render() {
//   const cityArray = ["Karachi", "Lahore", "Peshawer", "Quetta"]
//   return (
//   <ul>
//   {
//   cityArray.map((city) => <li key={city}> {city} </li>)
//   }
//   </ul>
//   )}
//   }
//   //no use
//   // ReactDOM.render(
//   // <MyFirstReactComponent />,
//   // document.getElementById('root')
//   // );
// export default App;

 //29 may coding practice

//  class App extends Component {
//  render(){
// const cityArray = ["karachi","gilgit","skardu"];
// return(
// <ul>
// {cityArray.map((naya)=>
// <li key ={naya} >
// {naya}
// </li>
// )}
// </ul>
// )
//  }
// }
// export default App






        //NOW LETS SEE USE OF COMPOSITION WITH SMALL COMPONENTS

// class Cities extends Component{
// render(){
//   const cityArray = ["karachi","gilgit","skardu"];
//   return(
// <ul>
//  {cityArray.map((n,index)=>
// <li key ={index} >
// {n}
// </li>
// )}
// </ul>
//   )
// }

// }

// class App extends Component{
//   render(){
// // nae chaleiga direct you have to pass props    
// //const cityArray = ["karachi","gilgit","skardu"];
//     return(
//       <div>
//         <Cities  />
//         <Cities />
//         <Cities />
//       </div>
//     )
//   }
// }export default App





 //now using props from abbbu to beita
      // class Cities extends Component{
      //   render(){
      //    const people = this.props.bachamaal
         
      //     return( 
      //   <ol>
      //    {people.map((n)=>
      //   <li key ={n} >
      //   {n}
      //   </li>
      //   )}
      //   </ol>
        
     
      //     )
      //   }
      //   }
      //   class App extends Component{
      //     render(){
      //   const abbumaal = ["2hr laga gae kaam 25 by props","gilgit","skardu"];
        
      //       return(
      //         <div>
      //           <Cities bachamaal = {abbumaal}/>
                
    
      //         </div>
      //       )
      //     }
      //   }export default App




           //stateless functional components
      // function DisplayNames (props){
        
      //   return(
      //     <ol>
      //    {props.names.map((n,index)=>
      //   <li key ={index} >
      //   {n}
      //   </li>
      //   )}
      //   </ol>
      //   )

      // }
      // class Cities extends Component{
      //   render(){
      //    const people = this.props.bachamaal
         
      //     return( 
      //   <ol>
      //    {people.map((n)=>
      //   <li key ={n} >
      //   {n}
      //   </li>
      //   )}
      //   </ol>
        
     
      //     )
      //   }
      //   }
      //   class App extends Component{
      //     render(){
      //   const abbumaal = ["2hr laga gae kaam 25 by props","gilgit","skardu"];
      //   const cityNames = ["karachi","gilgit","skardu"];
      //       return(
      //         <div>
      //           <Cities bachamaal = {abbumaal}/>
      //           <DisplayNames names = {cityNames} />
              
      //         </div>
      //       )
      //     }
      //   }export default App











            //understanding state and 
// class Display extends Component{
//   state={
//     cityNames: this.props.saaman,
//   }
//   render() {
//     return(
//       <div>
// <ol>{
// this.state.cityNames.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
// </div>
// )
// }
// }
// class App extends Component{
//   render(){
//     return(
//       <div>
//            <Display saaman= {["karachi","gilgit","skardu"]}/>    
//       </div>
//     )
//   }
// }
//  export default App




        //constructor method
// class Display extends Component{
//   constructor (props) {
//   super(props);
//   this.state={
//     cityNames: ["using constructor method","karachi","gilgit","skardu"],
//   }
// }
//   render() {
//     return(
//       <div>
// <ol>{
// this.state.cityNames.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>

// )

//   }
// </ol>
//       </div>
//     )

//   }
// }
// class App extends Component{
//   render(){
//     return(
//       <div>
//            <Display/>    
//       </div>
//     )
//   }
// }
//  export default App

          //changing state with setState method
// class Display extends Component{
//   render() {
//     return(
//       <div>
        
// <ol>{
// this.props.babycityNames.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
//  <button onDoubleClick={this.props.plzChangeState}>
//   Press the button to change state
// </button> 
// </div>
// )
// }
// }
// class App extends Component{ //parent hai
//   state = {
//   cityNames: ["karachi","gilgit","skardu"],
//   adresses:["pechs","gulshan"]

// }
            
// //mounting or binding must be there //and creating this.setState fn is sexy 
// //case1
// // changeTheState = () => { 
// //   this.setState(
// //   (ps) => ( //returning object //call back function hai
// //    {
// //     cityNames: ["badal gae chinki","lahore","nakosh","copenhagen"],
// //   }
// //   )//return ends
// // )//setState func end
// // } //mounting done binding done
// //case2
// changeTheState = () => { 
//   this.setState(
//     (ps) =>{
//       console.log(ps)
//       return(
//   //returning object //call back function hai
//    {cityNames: ["badalchinki","nakosh","copenhagen"]}
//       )
//       console.log(ps)//return kay keyword kay baad nechay nae ata
// }
//   )//return ends
// //setState func end
// } //mounting done binding done
//   render(){
//    const maalik = { a : ["using objects .a wali scheme","render mein maal daal kay pinger"]}
//     return(
//       <div>
//            <Display  babycityNames={this.state.cityNames} 

//            plzChangeState = {this.changeTheState}
           
           
//            />    
     
//            </div>
//     )
//   }
// }
//  export default App




//  //using proptypes
//  class Display extends Component{
//   static propTypes = {
//     guruGhar : PropTypes.array,
//     pinger : PropTypes.object, 
//   }

//   render() {
//     return(
//       <div>
//         <ul>{
// this.props.pinger.a.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ul>
// <ol>{
// this.props.babycityNames.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
// <ol>{
// this.props.guruGhar.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
//  <button onDoubleClick={this.props.plzChangeState}>
//   Press the button to change state
// </button> 
// </div>
// )
// }
// }
// class App extends Component{ //parent hai
//   state = {
//   cityNames: ["karachi","gilgit","skardu"],
//   adresses:["pechs","gulshan"]

// }
// changeTheState = () => { 
//   this.setState(
//     (ps) =>{
//       console.log(ps)
//       return(
//   //returning object //call back function hai
//    {cityNames: ["badalchinki","nakosh","copenhagen"]}
//       )
//       console.log(ps)//return kay keyword kay baad nechay nae ata
// }
//   )//return ends
// //setState func end
// } //mounting done binding done
//   render(){
//    const maalik = { a : ["using objects .a wali scheme","render mein maal daal kay pinger"]}
//     return(
//       <div>
//            <Display pinger = {maalik}
//            guruGhar={this.state.adresses} babycityNames={this.state.cityNames} 

//            plzChangeState = {this.changeTheState}
           
           
//            />    
     
//            </div>
//     )
//   }
// }
//  export default App







//using more than one prop
// class Display extends Component{
//   // static propTypes = {
//   //   guruGhar : PropTypes.array,
//   //   pinger : PropTypes.object
//   //   , 
//   // }

//   static propTypes = {
//     guruGhar : PropTypes.array,
//     pinger : PropTypes.oneOfType(
//       [PropTypes.array,
//         PropTypes.object,
//       PropTypes.number]
//     ), 
//   }

//   render() {
//     return(
//       <div>
//         <ul>{
// this.props.pinger.a.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ul>
// <ol>{
// this.props.babycityNames.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
// <ol>{
// this.props.guruGhar.map((n,index)=>
// <li key= {index}>
//   {n}
// </li>
// )}
// </ol>
//  <button onDoubleClick={this.props.plzChangeState}>
//   Press the button to change state
// </button> 
// </div>
// )
// }
// }
// class App extends Component{ //parent hai
//   state = {
//   cityNames: ["karachi","gilgit","skardu"],
//   adresses:["pechs","gulshan"]

// }
// changeTheState = () => { 
//   this.setState(
//     (ps) =>{
//       console.log(ps)
//       return(
//   //returning object //call back function hai
//    {cityNames: ["badalchinki","nakosh","copenhagen"]}
//       )
//       console.log(ps)//return kay keyword kay baad nechay nae ata
// }
//   )//return ends
// //setState func end
// } //mounting done binding done
//   render(){
//    const maalik = { a : ["using objects .a wali scheme","render mein maal daal kay pinger"]}
//     return(
//       <div>
//            <Display pinger = {maalik}
//            guruGhar={this.state.adresses} babycityNames={this.state.cityNames} 

//            plzChangeState = {this.changeTheState}
           
           
//            />    
     
//            </div>
//     )
//   }
// }
//  export default App



























































































































