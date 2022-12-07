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
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if (team.length>0){
            const lastelement = team.pop()
            resolve()
        }else{
            reject('Array is empty now')
        }
        },1000)
    })
}

createplayer({title:'shikhar', body: 'shikhar dhawan'})
.then(() => {
    getteam()
    deletePost().then((deletedElement) => {
        console.log(deletedElement)
        getteam()
        deletePost().then(() => {
            getteam()
            deletePost().then(() => {
                getteam()
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('Inside catch block', err)
                })               

            })

        })
    })
})