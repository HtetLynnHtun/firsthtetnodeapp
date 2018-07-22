let express = require("express");
let bodyParser = require("body-parser");
let app = express();

let campgrounds = [
    {name: "Fishing boys", image: "https://pixabay.com/get/e83db1082df5003ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "Beautiful girl", image: "https://pixabay.com/get/e83db1082df1053ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "Angel in the forest", image: "https://pixabay.com/get/e83db30f20f2093ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "The One in Mandalay", image: "https://farm3.staticflickr.com/2831/34024190182_93d2430a5f.jpg"},
    {name: "Fishing boys", image: "https://pixabay.com/get/e83db1082df5003ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "Beautiful girl", image: "https://pixabay.com/get/e83db1082df1053ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "Angel in the forest", image: "https://pixabay.com/get/e83db30f20f2093ed1584d05fb1d4e97e07ee3d21cac104496f2c37fa3e8b4bd_340.jpg"},
    {name: "The One in Mandalay", image: "https://farm3.staticflickr.com/2831/34024190182_93d2430a5f.jpg"}
];

let port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds})
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    let campName = req.body.campName;
    let image = req.body.image;
    let newCampground = {name: campName, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(port, function(){
    console.log(`The server has started at port ${port}`);
});