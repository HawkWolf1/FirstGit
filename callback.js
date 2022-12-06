// create and array
const team = [
    {title: 'virat', body: 'virat kohli', createdAt: new Date().getTime()},
    {title: 'sachin', body: 'sachin tendulkar', createdAt: new Date().getTime()}
]
// fetch from  the server using a function

let intervalId = 0
function getteam(){  
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        let output = ''
        for (let i=0; i<team.length; i++) {   
        
        output += `<li> ${team[i].title} - last updated ${newDate().getTime() - team[i].createdAt/1000} </li>`
    }
    console.log('timer running id = ', timerId)
    document.body.innerHTML = output 
}, 1000)
}

function createplayer(j, callback) {
    setTimeout(() =>{
    team.push({...j, createdAt: newDate().getTime()})
    callback()
},500)
} 

function create4thplayer(j, callback) {
    setTimeout(() =>{
    team.push({...j, createdAt: newDate().getTime()})
    callback()
},6000)
} 



createplayer({title: 'rahul', body: 'rahul dravid'},getteam)
create4thplayer({title: 'sam', body: 'sam curran'},getteam)