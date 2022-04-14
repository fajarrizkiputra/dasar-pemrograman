var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
writeFileContent
console.log("Callback")
// setTimeout(function() {
//     console.log("saya dijalankan belakangan")
//   }, 3000)
   
//   console.log("saya dijalankan pertama")
  
// console.log("ini baris pertama")
// console.log("ini baris kedua")
// console.log("ini baris ketiga")/* output dari kode diatas
// ini baris pertama
// ini baris kedua
// ini baris ketiga
// */

// setTimeout(() => console.log("ini baris pertama"), 3000)
// setTimeout(() => console.log("ini baris kedua"), 1000)
// setTimeout(() => console.log("ini baris ketiga"), 2000)/* output dari kode diatas
// ini baris kedua
// ini baris ketiga
// ini baris pertama
// */

// const posts = [
//     {
//       title: "Post one",
//       body: "This is post one"
//     },
//     {
//       title: "Post two",
//       body: "This is post two"
//     }
//   ]
  
//   const createPost = post => {
//     setTimeout(() => {
//       posts.push(post)
//     }, 2000)
//   }
  
//   const getPosts = () => {
//     setTimeout(() => {
//       posts.forEach(post => {
//         console.log(post)
//       })
//     }, 1000)
//   }
  
//   const newPost = {
//     title: "Post three",
//     body: "This is post three"
//   }
  
//   createPost(newPost)
//   getPosts()

//   function functionOne(x) { 
//     return x 
//   }
  
//   function functionTwo(y){
//     //some code
//   }
  
//   functionTwo(functionOne)

// const posts = [
//     {
//       title: "Post one",
//       body: "This is post one"
//     },
//     {
//       title: "Post two",
//       body: "This is post two"
//     }
//   ]
  
//   const createPost = (post, callback) => {
//     setTimeout(() => {
//       posts.push(post)
//       callback()
//     }, 2000)
//   }
  
//   const getPosts = () => {
//     setTimeout(() => {
//       posts.forEach(post => {
//         console.log(post)
//       })
//     }, 1000)
//   }
  
//   const newPost = {
//     title: "Post three"
//     body: "This is post three"
//   }
  
//   createPost(newPost, getPosts)
//   getPosts()


// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve("foo")
//     }, 3000)
//  })

//  const posts = [
//     {
//       title:"Post one",
//       body:"This is post one"
//     },
//     {
//       title:"Post two",
//       body:"This is post two"
//      }
//   ]
  
//   const createPost = post => {
//      return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          posts.push(post)
//          const error=false
//          if(!error) {
//            resolve()
//          }else{
//            reject()
//          }
//        }, 2000)
//      })
//   }
  
//   const getPosts = () => {
//       setTimeout(() => {
//         posts.forEach(post => {
//          console.log(post)
//         })
//       }, 1000)
//   }
  
//   const newPost = {
//     title:"Post three",
//      body:"This is post three"
//   }
  
//   createPost(newPost)
//      .then(getPosts)
//      .catch(error => console.log(error))

// const posts = [
//     {
//        title:"Post one",
//        body:"This is post one"
//     },
//     {
//        title:"Post two",
//        body:"This is post two"
//     }
//  ]
 
//  const createPost = post => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//            posts.push(post)
//            const error = false
//            if(!error) {
//               resolve()
//            }else{
//               reject()
//            }
//         }, 2000)
//       })
//  }
 
//  const getPosts = () => {
//       setTimeout(() => {
//          posts.forEach(post => {
//             console.log(post)
//           })
//       }, 1000)
//  }
 
//  const newPost = {
//     title:"Post three",
//     body: "This is post three"
//  }
 
//  const init = async() => { 
//       await createPost(newPost)
//       getPost()
//  }
 
//  init()

