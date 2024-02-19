import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
const app = express();

const textParser = bodyParser.text();

app.post("/", textParser, (req, res) => {
  const encodedData = req.body;
  const decodedData = Buffer.from(encodedData, "base64").toString("utf-8");
  console.log(decodedData);
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
