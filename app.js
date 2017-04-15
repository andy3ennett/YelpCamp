var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://unsplash.com/search/camping?photo=5Rhl-kSRydQ"},
        {name: "Granite Hill", image: "https://unsplash.com/search/camping?photo=3fJOXw1RbPo"},
        {name: "Traveller's Rest", image: "https://unsplash.com/search/camping?photo=K9olx8OF36A"},
        {name: "Salmon Creek", image: "https://unsplash.com/search/camping?photo=5Rhl-kSRydQ"},
        {name: "Granite Hill", image: "https://unsplash.com/search/camping?photo=3fJOXw1RbPo"},
        {name: "Traveller's Rest", image: "https://unsplash.com/search/camping?photo=K9olx8OF36A"},
        {name: "Salmon Creek", image: "https://unsplash.com/search/camping?photo=5Rhl-kSRydQ"},
        {name: "Granite Hill", image: "https://unsplash.com/search/camping?photo=3fJOXw1RbPo"},
        {name: "Traveller's Rest", image: "https://unsplash.com/search/camping?photo=K9olx8OF36A"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and append to array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/camgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server is Running"); 
});