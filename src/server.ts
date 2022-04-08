import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Hello NLW!");
});

app.post("/test-post", (req, res) => {
  return res.send("Hello NLW! Method: POST");
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});