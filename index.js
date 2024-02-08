import express from "express";
import userRoutes from "./routes/userRoutes.js";

const App = express();
// port
const PORT = 4001;

//Pug
App.set("view engine", "pug");
App.set("views", "./views");

// public
App.use(express.static("src"));

// routing
App.use("/auth", userRoutes);

App.listen(PORT, () => console.log(`Listening on port ${PORT}`));
