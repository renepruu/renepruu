const express = require("express");
const dateTime = require("./")
const fs = require("fs")
//päringu lahtiarutamine(post)
const bodyparser = require("body-parser");


const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));
//pilt = true, muu = false
app.use(bodyparser.urlencoded({extended: false}));




app.get("/regvisit", (req, res)=>{
    //res.send("Express läks tööle");
    res.render("regvisit");


});

app.get("/timenow", (req, res)=>{
    const weekdayNow = dateTime.weekdayET();
    const dateNow = dateTime.dateFormattedET();
    const timeNow = dateTime.timeFormattedET();

    res.render("timenow", {nowWD: weekdayNow, nowD: dateNow, nowT: timeNow});
});

app.get("/vanasonad", (req, res) => {
    	let folkWisdom = [];
        fs.readFile("public/textfiles/vanasonad.txt", "utf8", (err, data)=>{
            if(err){

            
            throw err;}
            else {
                folkWisdom = data.split(";");
                res.render("justlist", {h2: "Vanasõnad", listData: folkWisdom});
            }

        });

});

app.post("regvisit", (reg, res)=>{
    console.log(req.body);
    fs.open("public/textfiles/visitlog.txt", "a", (err, file)=>{
        if(err){
            throw err;
        }
        else {
            fs.appendFile("public/textfiles/visitlog.txt", req.body.firstNameInput + " " + req.body.lastNameInput + ";", (err=>{
                if(err){
                    throw err;
                }
                else {
                    console.log("Salvestatud faili")
                    res.render("regvisit");
                }
            }))
        }
    })
})

app.listen(5128);