import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api", (req, res) => {
  res.send("API response");
});

app.listen(3333, () => console.log("Started server"));
