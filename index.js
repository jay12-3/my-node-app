const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    console.log(" Now it is working  ");
    console.log(" It is Done.");
})