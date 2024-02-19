import axios from "axios";

const sendData = async () => {
  const username = "admin";
  const password = "test123";
  const data = username.concat(":", password);

  const saltRounds = 10;
  const encodedData = Buffer.from(data).toString("base64");
  console.log(encodedData);
  const options = {
    method: "POST",
    url: "http://localhost:1000",
    headers: {
      "content-type": "text/plain",
    },
    data: encodedData,
  };
  const response = await axios.request(options);
  // console.log(response.data);
};

sendData();
console.log("end.");
