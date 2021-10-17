import express from "express";

import booksRoutes from "./routes/books.js";

const app = express();
const PORT = 80

app.use(express.urlencoded());

app.use("/book", booksRoutes);
app.get("/", (req, res) => res.send("Unauthorized"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
