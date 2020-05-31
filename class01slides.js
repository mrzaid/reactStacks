// const teachers = ["zaid","ahmed","john","wick"];
// const titles = []; // value is going to assign not change
// for (let i=0;i<teachers.length;i++){
//     titles[i]= "Mr ."+ teachers[i];
// }
// console.log(titles);

// const teachers = ["zaid","ahmed","john","wick"];
// const titles = teachers.map (name => "Mr ." + name)
// console.log(titles);

// const names = ["zaid","ahmed","john","wick"];
// const selectedNames = [];
// for(let i = 0 ; i < names.length;i++ ){
// if(names[i].length >=5){
//     selectedNames.push(names[i])
// }
// }
// console.log(selectedNames);


const names = ["zaidjabba","zaadahmed","johnjubba","wick"];
const selectedNames = names.filter(name => name.length >=5);

console.log(selectedNames);





























