// *----------------------
//* express.Router
// *----------------------

//? In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* <https://expressjs.com/en/guide/routing.html>
//? Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

const express = require("express");
const router = express.Router();
const {home, register}=require("../controller/auth-controller")
const controller =require("../controller/auth-controller")
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const {signupSchema, loginSchema} = require("../validators/auth-validators");
// const loginSchema = require("../validators/auth-validators");

1.// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });

2.// router.route("/").get((req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });

// 3.
router.route("/").get(home);
router.route("/register").post(validate(signupSchema), controller.register);
router.route("/login").post(validate(loginSchema),controller.login);
router.route("/user").get(authMiddleware ,controller.user);


module.exports = router;