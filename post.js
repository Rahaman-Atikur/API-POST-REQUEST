let handlePost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
        displayPost(data);
    })
}


const displayPost = (posts) =>{
    let postContainer = document.getElementById('postContainer');
    for(let post of posts){
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML =`
        <h1> ${post.title}</h1>
        <p>Details</p>
        <button>Details</button>
        `;
        postContainer.appendChild(div);
    }
}

handlePost();