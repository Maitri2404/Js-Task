const obj = {
    Do: "I",
    JS: "know",
    NodeJs: "and"
}

// const swappedObject = {};

// for (const key in obj) {
//   const value = obj[key];
//   swappedObject[value] = key;
// }

// console.log(swappedObject); 

const swappedObject={};
const keys=Object.keys(obj);

for(let key of keys){
    swappedObject[obj[key]]=key;
}
console.log(swappedObject)


// const swappedObject = {};

// const keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   const value = obj[key];
//   swappedObject[value] = key;
// }

// console.log(swappedObject); 

