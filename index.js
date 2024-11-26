// IMPORTING THE EXPRESS 

const express = require ("express")
const dbconnect = require("./db")
const Student = require("./Student.Model")


// CONVERTING THE DATA INTO JSON DATA 

const app = express()
app.use(express.json())

// ROUTES GET METHOD 

app.get ("/get",async(req,res) => {
    let data = await user.find()
    res.send(data);
})
 // ROUTES POST METHOD 

app.post ("/post",async(req,res) => {
    let data = await Student.create(req.body)
    res.send(data)
})

// ROUTES DELETE METHOD

app.delete ("/delete/:id",async (req,res)=>{
    console.log(req.params);
    res.send("delete")
 
    let {id} = req.params
    let data = await Student.findByIdAndDelete(id)
    res.send(data)
})

// ROUTES PATCH METHOD

app.patch("/patch/:id", async(req,res) => {
    let {id} = req.params
    let data = await Student.findByIdAndUpdate(id,req.body)
    res.send(data)
})

// LISTENING TO THE PORT 

app.listen(5000 , () => {
    console.log("Server is running on port 5000")
    dbconnect()
})