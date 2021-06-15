const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const AuthMiddleware = require("./middleware/checkAuth");
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");

mongoose.connect("mongodb://localhost:27017/blogData", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.use("/posts", PostController);
app.use("/users", UserController);

app.listen(8000, () => {
	console.log("App runing on port 8000");
});
