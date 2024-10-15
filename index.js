import express from "express";

const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
