// get request
function getTodos(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
}
