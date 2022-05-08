const express = require("express");
const mongoose= require("mongoose");
const cors =require("cors");

const PORT =3030;
const app = express();
const todoRoutes =require("./routes/todoRoutes");
const connectionOptions={useUnifiedTopology:true, useNewUrlParser: true /*,useFindAndModify: false*/};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist",connectionOptions)
    .then(()=> console.log("Connected Succesfully"))
    .catch((err)=>console.error(err));

app.use("/todos",todoRoutes);

app.listen(PORT, ()=>{
    console.log("The Server is listening on the port:." + PORT);
});
