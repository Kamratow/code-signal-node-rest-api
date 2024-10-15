import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("This has been returned from server!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
