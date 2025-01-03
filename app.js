const express = require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./model/chat.js");
const path=require("path");

const methodOverride=require("method-override");


const port=8080;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));




async function main(){

    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(()=>{
    console.log("connected..")
}).catch((err)=>{
    console.log(err)
});




// let chat1=new Chat({
//     msg:"hey hi rushi",
//     to:"rushi",
//     from:"vaibhav",
//     time:new Date(),

// })
// chat1.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


//display chat
app.get("/chats",async (req,res)=>{
    // res.send("working");
    let chats=await Chat.find();
    //console.log(chat)
    res.render("wp.ejs",{chats});
});



//--------------------------create chat-----------------------------

//display new ejs file
app.get("/new",(req,res)=>{
    res.render("new.ejs");
})
//create chat
app.post("/new",(req,res)=>{
    
    let {msg,from,to}=req.body;
   
    Chat.insertMany({msg:msg,from:from,to:to,time:new Date()}).then((res)=>{
        console.log("chats are stored in databasse..")
    }).catch((err)=>{
        console.log(err)
    })
    
    
    res.redirect("/chats")

    

})


//------------------------------------update chat------------------

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id);
    
    res.render("edit.ejs",{chat});
})
app.put("/chats/:id",async(req,res)=>{
   
    let {id}=req.params;
    let {msg,from,to}=req.body;
    // console.log(req.body.msg)

    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:req.body.msg},{runValidators:true,new:true}).then((res)=>{
        console.log(updatedChat);
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");

});

// -------------------------------delete---------------------------


app.get("/chats/:id/del", async (req,res)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id);
    
    res.render("delete.ejs",{chat});
});

app.delete("/chats/:id/del", async (req,res)=>{
    let {id}=req.params;
   await Chat.findByIdAndDelete(id);
    res.redirect("http://localhost:8080/chats/");
});

//--------------------------------------------------------------------
app.listen(port,()=>{
    console.log(`listning on  ${port}`)
});

