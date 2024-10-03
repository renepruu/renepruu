const express = require("express");
const dateTime = require("./")

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));





app.get("/", (req, res)=>{
    //res.send("Express läks tööle");
    res.render("index.ejs");


});

app.get("/timenow", (req, res)=>{
    const weekdayNow = dateTime.weekdayET();
    const dateNow = dateTime.dateFormattedET();
    const timeNow = dateTime.timeFormattedET();

    res.render("timenow", {nowWD: weekdayNow, nowD: dateNow, nowT: timeNow});
})




app.listen(5128);