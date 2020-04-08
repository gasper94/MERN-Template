// import axios from "axios";

const signin = (user) => {
  // return console.log("hey sexy", user);
  // axios
  //   .post("/auth/signin", user)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return fetch("http://localhost:8080/auth/signin", {
    method: "post",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
    });

  // fetch("http://localhost:8080/auth/signin", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(user),
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((err) => console.log(err));
};

const signout = () => {
  return fetch("/auth/signout/", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { signin, signout };
