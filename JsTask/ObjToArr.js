const obj={
    name: "User",
    age: 25,
    city: "Ahmedabad"
}

//method 1
// let arr=[];
// for(const key in obj){
//     const value=obj[key];
//     arr.push([key,value])
// }
// console.log(arr);



//method 2
// const keysArray = Object.keys(obj); 
// const arr = keysArray.map(key => [key, obj[key]]); 
// console.log(arr);
  
//method 3
// const arr = [];
// let keys=Object.keys(obj);
// for (const key of keys) {
//    arr.push([key, obj[key]]);
// }
  
// console.log(arr); 



// const arr = [];
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     arr.push([key, obj[key]]);
//   }
// }

// console.log(arr);
