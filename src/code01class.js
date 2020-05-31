  
  //MUST BE IN INDEX.JS
  
  
  //class01 amir pinger 
      //Create a simple HELLO WORLD
// const Display = React.createElement( 'div',null,"hello react baba world im gonna conquer you")
// console.log(Display)
// ReactDOM.render(
//   Display,
//   document.getElementById('root')
// ) 
      //khel1
// const Display = React.createElement( 'h1',{
//   className : "redColor",
// },"hello react knock teira baap aya ")
// //console.log(Display)
// ReactDOM.render(
//   Display,
//   document.getElementById('root')
// ) 


                  //khel2
// const knockBaap = React.createElement('strong',{
//   className:"baapColors",
// },"teiray baapoun ka baap aya")
// ReactDOM.render(
//   knockBaap,
//   document.getElementById('root')//yeh ustaad class hai index.html mein bani hui
// )

            //nested content in react
 //More than one element
// const nestedDisplay = React.createElement(
//       "ul",{
//             //className: "redColor",
//       },
//       React.createElement("li",{
//             //className:"baapcolors"
//       },"zaid"),
//       React.createElement("li",{
//            // className:"baapcolors"
//       },"ahmed"),
// )
// ReactDOM.render(
//       nestedDisplay,
//       document.getElementById('root')
// )

             //nested coding with array
// const names = ["zaid","ahmed","john","wick"]
// const nestedDisplay = React.createElement(
//       "ul",{
//            className: "redColor",
//       },
// names.map(name =>React.createElement("li",{
//       key: name // "name"  nae deina ek key hojaegi everychild in an array should have unique keys
// },name) ) 
// )
// console.log(nestedDisplay);
// ReactDOM.render(
//       nestedDisplay,
//       document.getElementById('root')
// )


            //playing nested with jsx
// const names = ["zaid","ahmed","john","wick"]
// const nestedDisplay = React.createElement(
//       "ul",{
//            className: "redColor",
//       },
// names.map(name => <h1 key = {name}>   {name} </h1> ) 
// )
// console.log(nestedDisplay);
// ReactDOM.render(
//       nestedDisplay,
//       document.getElementById('root')
// )

            //Array of city names
// const cityNames = ["karachi","lahore","faislabad","multn"];
// const Display = React.createElement("ul",null,
// cityNames.map(name=>React.createElement("li",{key:name,},name))
// )
// ReactDOM.render(  
// Display,document.getElementById("root")
// )



            //Array of city names using jsx

// const cityNames = ["karachi","lahore","faislabad","multn"];
// const Display = <ul>
//                   {cityNames.map(name => <li key = {name} >
//                         {name}
//                   </li>      )}  
//                 </ul>
// ReactDOM.render(
//       Display,
//       document.getElementById("root")
// )







//CLASS ONE ENDS IN INDEX.JS



