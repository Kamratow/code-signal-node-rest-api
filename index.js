import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (_req, res) => {
  res.send("This has been returned from server!");
});

// handle 404 not found error
app.use((_req, res) => {
  res.status(404).send("Resource not found");
});

// handle 500 internal server error
app.use((err, _req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error - try again later");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
