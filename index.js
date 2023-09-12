// Add your code here
function submitData(name, email) {
    // Define the data object with name and email
    const userData = {
      name: name,
      email: email
    };
  
    // Configure the fetch options
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    // Perform the fetch and return the promise
    return fetch("http://localhost:3000/users", fetchOptions)
      .then(response => response.json())
      .then(data => {
        // Access the new id from the response and append it to the DOM
        const newId = data.id;
        document.body.innerHTML = newId;
      })
      .catch(error => {
        // Handle errors by appending the error message to the DOM
        document.body.innerHTML = error.message;
      });
  }
  