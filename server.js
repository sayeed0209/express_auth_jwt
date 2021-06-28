const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cokkieParser = require("cookie-parser");
const methodOverride = require("method-override");
const PORT = process.env.PORT;
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cokkieParser());
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

app.get("/", (req, res) => {
	res.send("<h1>Welcome to home</h1>");
});

app.use("/posts", PostController);
app.use("/users", UserController);

app.listen(PORT, () => {
	console.log("App runing on port " + PORT);
});
