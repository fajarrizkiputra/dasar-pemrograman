// Jawaban Soal 1
let luas=3;
let keliling=10;
console.log(luas * keliling)

// Jawaban Soal 2
const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

// Jawaban Soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
console.log(newObject)

// // Jawaban Soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = west.concat(east)
console.log(combined)   

// Jawaban Soal 5
const planet = 'earth';
const view = 'glass' ;
const before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet ;





// const newObject = {
//     firstName: "Muhammad",
//     lastName: "Iqbal Mubarok",
//     address: "Jalan Ranamanyar",
//     hobby: "playing football",
//   }
// //   dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
  
//   const firstName = newObject.firstName;
//   const lastName = newObject.lastName;
//   const address = newObject.address;
//   const hobby = newObject.hobby;
// //   Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
  
//   // Driver code
//   console.log(firstName, lastName, address, hobby)

// function multiply(a, b = 1) {
//     let = a * b;
//   }
   
//   console.log(multiply(5, 2));
//   // expected output: 10
   
//   console.log(multiply(5));
//   // expected output: 5

// object
// var studentName = {
//     firstName: 'Luas',
//     lastName: 'Panjang'
// };
 
// const {firstName, lastName} = studentName

// console.log(firstName)

// let x = 1;
 
// if (x === 1) {
//   let x = 2;
 
//   console.log(x);
//   // expected output: 2
// }
 
// console.log(x); // 1 

// const number = 42;
// number = 100; // Uncaught TypeError: Assignment to constant variable.

// const myFuncton = () => {
//     //function
// }

// // panggil Function
// myFunction()

// function myFunction (){
//     // isi Function
// }
// // panggil Function
// myFunction()

// const firstName = 'John'
// const lastName = 'Doe'
// const teamName = 'Mr'

// const theString = `${firstName}, ${lastName}, ${teamName}`
// console.log(theString)

// array
// let numbers = [1,2,3]

// const [numberOne, numberTwo, numberThree] = numbers

// console.log(numberOne)

// // object
// var studentName = {
//     firstName: 'Peter',
//     lastName: 'Parker'
// };
 
// const {firstName, lastName} = studentName

// console.log(firstName)


// Rest Parameters
 
//first example
// let scores = ['98', '95', '93', '90', '87', '85']
// let [first, second, third, ...restOfScores] = scores;
 
// console.log(first) // 98
// console.log(second) // 95
// console.log(third) // 93
// console.log(restOfScores) // [90, 87, 85] 

// //second example 
// const filter = (...rest) =>{
//     return rest.filter(el => el.text !== undefined)
// }

// console.log(filter(1, {text: "wonderful"}, "next"))

// // spread operator
// let array1 = ['one', 'two']
// let array2 = ['three', 'four']
// let array3 = ['five', 'six']
 
// // ES5 Way / Normal Javascript
 
// var combinedArray = array1.concat(array2).concat(array3)
// console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']
 
// // ES6 Way 
 
// let combinedArray = [...array1, ...array2, ...array3]
// console.log(combinedArray) // ['one', 'two', 'three', 'four', 'five', 'six']