require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT =process.env.PORT
const router = require("./routes/auth-routes");
const exp = require("constants");
const connectDB = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./routes/contact-router");
const serviceRoute = require("./routes/service-routes");
const adminRoute = require("./routes/admin-router");
require("dotenv").config;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());  //middleware
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/", router);
app.use("/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/auth", router);
app.use("/api/admin", adminRoute);




// app.get("/", (req, res) => {
//   res.status(200).send("Welcome ");
// });

// app.get("/register", (req, res) => {
//   res.status(200).json({ msg: "registration successful" });
// });

app.use(errorMiddleware);



connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
});