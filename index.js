import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

const fruits = [
  {
    name: "Orange",
    availableItems: 5,
  },
  {
    name: "Apple",
    availableItems: 8,
  },
  {
    name: "Watermelon",
    availableItems: 2,
  },
];

// handle the request for favicon to avoid showing errors on client side as we won't be providing the icon for now
app.get("/favicon.ico", (_req, res) => res.status(204).end());

app.get("/fruits", (req, res) => {
  const { fruitName } = req.query;
  let filteredFruits = fruits;

  if (fruitName) {
    filteredFruits = filteredFruits.filter((singleFruit) =>
      singleFruit.name.toLowerCase().includes(fruitName.toLowerCase())
    );
  }

  res.json(filteredFruits);
});

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
