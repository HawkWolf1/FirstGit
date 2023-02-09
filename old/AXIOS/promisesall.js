const team = [
    {title: 'virat', body: 'virat kohli'},
    {title: 'sachin', body: 'sachin tendulkar'}
]


function getteam(){  
    setTimeout(() => {
        let output = ''
        team.forEach((i,index) => {
        output += `<li> ${i.title}  </li>`
    })
    document.body.innerHTML = output 
}, 1000)
}
function createplayer(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            team.push(i)
        
            const error = false
        if (!error) {
            resolve()
        }else{
            reject ('Error: Something went wrong')
        }
        },500)  
    })
    
} 
//createplayer(title: 'rohit', body: 'rohit sharma')
//.then(getteam)
//.catch(err => console.log(err))

// promise all 
const promise1 = Promise.resolve('Hello world')
const promise2 = 10
const promise3 = new Promise((resolve,reject) =>
setTimeout(resolve, 2000, 'Goodbye')
)