const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const session = require("express-session");
app.use(bodyParser.urlencoded({extended:false}));

const router = require("./src/router/router")(app);





app.set("views","./src/views");
app.set("view engine","ejs");

app.use("/",router);

// app.use(sessoin(sessionConfig.sessionConfig));


app.listen("3000",()=>{console.log("3000연결")});