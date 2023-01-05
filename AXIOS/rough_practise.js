// var users = ['rat', 'cat', 'bat']

// function addUsers(username, callback){
//     setTimeout(() =>{
//         users.push(username)
//         callback()

//     }, 2000)
// }

// function getUsers(username){
//     setTimeout(() =>{
//         console.log(users)

//     },1000)
// }

// addUsers('mat', getUsers)







// var users = ['rat', 'cat', 'bat']

// function addUsers(username){
//     return newPromise(resolve, reject)=>{
//         setTimeout(() =>{
//             users.push(username)
//         const error=false

//         if (!error){
//             resolve()
//         }else{
//             console.log('something is wrong')
//         }
    
//         }, 2000)    
//     }
    
// }

// function getUsers(username){
//     setTimeout(() =>{
//         console.log(users)

//     },1000)
// }

// addUsers('sat')
// .then(getUsers)

async function init(){
    await createPost({'title:  this is post 3'})
    getposts()
}