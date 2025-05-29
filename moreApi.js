let handleLoadUser =()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=> {
        console.log(data);
        displayUser(data);
    })
}

let displayUser = (users) =>{
    console.log(users[0]);
}