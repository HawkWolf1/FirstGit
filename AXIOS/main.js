// get request
function getTodos(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
// post request
function addTodo(){
    axios({
        method: 'post'
        url = 'https://jsonplaceholder.typicode.com/todos'
        data: {
            title: 'New Todo'
            completed: false
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// put/patch request 
function updateTodo(){
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1',{
        title = 'update Todo'
        completed: true       
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// delete request
function removeTodo(){
    axios 
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

// simultaneous data
function getData(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos,posts) => showOutput(posts)))
    .catch(err => console.log(err))
}

// Intercepting requests and responses
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`)

    return config
}
error => {
    return Promise.reject(error)
}
)

// custom headers
function customheaders(){
    const config = {
        headers: {
            'Content-Type': 'application/json'
            Authorization: 'sometoken'
        }
    }
axios
    .post('https://jsonplaceholder.typicode.com/todos',{
    title = 'New Todo'
    completed: true       
} config
)
.then(res => console.log(res))
.catch(err => console.log(err))  
}

// transforming requests and responses
function transformResponse(){
    const options = {
        method: 'post'
        url  = 'https://jsonplaceholder.typicode.com/todos'
        data: {
            title: 'Hello World'
        }
    }transformResponse: axios.defaults.transformResponse.concat(data => {
        data.title = data.title.toUpperCase()
    })
}

// error handling
function errorHandling(){
    axios
    .get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
        if (err.response){
            // server responded with a status other than 200 range
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)

            if (error.response.status === 404){
                alert('Error: Page not found')
            }
        } else if (err.request) {
           // request was made but no response
           console.error(err.request)
        }else {
            console.error(err.message)
        }
    })
}

// cancel token 
function cancelToken(){
    const source = axios.cancelToken.source()
    axios
    .get('https://jsonplaceholder.typicode.com/todoss', {
        cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
        if (axios.isCancel(thrown)){
         console.log('Request cancelled', thrown.message)
        }
    })
    if (true){
        source.cancel('Request cancelled!')
    }
}

// Axios Instance
const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
axiosInstance.get('/comments').then(res => showOutput(res))