// function powArr(x) {
//   return x.map(sum => sum**2)
// }

// powArr([5,5,5,5,5,4])
// 

// const sports = ['boxing', 'football', 'swimming', 'biking'];
// sports.splice(3,0, 'kendo', 'judo', 'basketball');
// console.log(sports)

// const array = [
//   { name: 'Benji', age: 30 },
//   { name: 'Nas', age: 20 },
//   { name: 'Sayo', age: 22 },
//   { name: 'Sapari', age: 16 },
//   { name: 'Storm', age: 27 }
// ];



// function filter (arr) {
//     const newArr = []
//     arr.forEach(element => {
//         if (element.age > 20) {
//             newArr.push(element)
//         }
//     });
//     return newArr
//   console.log(newArr);
// }

// const filter1 = arr => arr.filter(e => e.age > 20);

// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' },
//   { id: 4, name: 'Football' }
// ];

// tasks.forEach(element => {
//   let newArr = []
//   if(element.id === 3){
//     newArr.push(element);
//     console.log(newArr)
//   }
//   return newArr
// });

// const sqrtNum = arr => arr.reduce((acc,cur) => acc + (cur ** 2),0);
// sqrtNum([2,4,3]);

// const todos = [
//   { id: 1, title: 'reading' , completed: false},
//   { id: 2, title: 'workout' , completed: true},
//   { id: 3, title: 'cooking' , completed: true},
//   { id: 4, title: 'coding' , completed: false},
// ]
// const deleteTodo = (arr,id) => {
//     let index = arr.findIndex(e => e.id === id)
//     arr.splice(index,1)
//     return arr;
// }
// console.log(deleteTodo(todos,1))

// const findMid = str => {
//   let strlength = str.length/2
//   console.log(strlength);
//   if(strlength%2===0){
//     return str.slice(strlength -1, strlength +1);
//   }else {
//     return str.slice(strlength);
//   }
// }


// findMid('humble')

