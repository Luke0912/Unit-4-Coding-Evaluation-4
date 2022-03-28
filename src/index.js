const express = require("express");

const { register, login, newtoken } = require("./controllers/auth.controller");

const todoController = require("./controllers/todo.controller");

const userController = require("./controllers/user.controller");

const app = express();

const router = new express.Router()

router.use(express.json());

router.use("/register", register);

router.use("/login", login);

router.use("/user", userController);

router.use("/user", userController);

router.use("/todos", todoController);

router.use("/todos", todoController);

app.use(router)

module.exports = app;
