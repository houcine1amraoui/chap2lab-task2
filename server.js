import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

let users = [
  {
    username: "mohamed-msila",
    clearPassword: "mohamed2024",
    hashedPassword:
      "$2b$10$Dvx2GVz8mGxnwFQgqAmrteeq7WJmxr98gr3R6nsdWCdnJmcpxwjq2",
  },
  {
    username: "amina-msila",
    clearPassword: "amina2024",
    hashedPassword:
      "$2b$10$Mt6ZfY5qm4trsMDGW67eg.o67mg3zeE4oh.34TXrK6LeguZNGwUdi",
  },
];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = {
    username,
    clearPassword: password,
    hashedPassword,
  };
  users.push(newUser);
  console.log(users);
  return res.json(newUser);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  var match = false;
  if (username && password) {
    // validation
    const result = users.find((user) => {
      return user.username === username;
    });
    if (result.length > 0) {
      match = await bcrypt.compare(password, result[0].hashedPassword);
    }
    if (match) {
      return res.send("Welcome");
    } else {
      return res.status(200).send("username or password incorrect");
    }
  }
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
