//2. Fetch

export default function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
    .then(response => response.json)
    .then(users => console.log(users.data));
  }
  
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then(response => {
      return response.json();
    })
    .then(users => {
      console.log(users.data);
    })
   .catch(error => {
      console.error(error);
    });
  }
  
  export default function ambilDataUser() {
    fetch("https://reqres.in/api/users")
    .then(response => {
        return response.json();
      })
    .then(users => {
        console.log(users.data);
      })
    .catch(error => {
        console.error(error);
      });
  }
  
  import ambilDataUser from './Hello World';
  
  ambilDataUser();