const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    name: "John Corner",
    age: "45",
    address: "123 New York",
  });
});

app.listen(8081, () => console.log("server is running......"));
