import express from "express";
import mongoose from "mongoose";
import categoryRoute from "./route/category.js";
import userRoute from "./route/user.js";
mongoose.connect('mongodb://127.0.0.1:27017/EcOm_Site');
const app = express()
const port = 3000

app.use(express.json());
app.use("/category",categoryRoute);
app.use("/user",userRoute)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

