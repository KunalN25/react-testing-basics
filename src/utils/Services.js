// import axios from "axios";

export const FetchData = () => {
  return fetch("http://localhost:3000/data.json").then((res) => {
    return res.json();
  });
};

export const FetchUsers = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.json();
  });
};
