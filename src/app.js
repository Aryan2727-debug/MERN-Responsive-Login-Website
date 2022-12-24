const express = require("express");
const path = require("path");
const hbs = require("hbs");
const User = require('./models/usermessage');
require("./db/conn");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))

const templatePath = path.join(__dirname , "../templates/views");
const partialsPath = path.join(__dirname , "../templates/partials");
const staticPath = path.join(__dirname , "../public");

app.use(express.static(staticPath));
app.set("views" , templatePath);
app.set("view engine" , "hbs");

hbs.registerPartials(partialsPath);

app.get("/" , (req,res) => {
    res.render("index");
});

app.get("/about" , (req,res) => {
    res.render("about");
});

app.get("/services" , (req,res) => {
    res.render("services");
});

app.get("/contact" , (req,res) => {
    res.render("contact");
});

app.post("/contact" , async (req,res) => {
    try{
     
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    }catch(err){
        res.status(400).send(err);
    };
});

app.listen(port , () => {
    console.log(`App started at port ${port}`);
});