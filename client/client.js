import axios from "axios";
import bcrypt from "bcrypt";

const login = async () => {
  const username = "mohamed-msila";
  const password = "mohamed2024";
  const options = {
    method: "POST",
    url: "http://localhost:1000/login",
    data: {
      username,
      password,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
};

login();
console.log("End.");
