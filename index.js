import express from "express";

const App = express();
const PORT = 4001;

App.listen(PORT, () => console.log(`Listening on port ${PORT}`));
