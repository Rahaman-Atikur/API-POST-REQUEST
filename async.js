let handleUser = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } 
  catch {
    console.log("Error Found");
  }
};

handleUser();
