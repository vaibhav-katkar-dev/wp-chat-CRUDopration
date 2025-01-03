const mongoose=require("mongoose");
const Chat=require("./model/chat.js");


async function main(){

    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then(()=>{
    console.log("connected..")
}).catch((err)=>{
    console.log(err)
});

let allChats=[

    { msg:"hey hi rushi",
    to:"rushi",
    from:"vaibhav",
    time:new Date(),
},
{ msg:"hey nee pen",
    to:"ram",
    from:"sham",
    time:new Date(),
},
{ msg:"his name ",
    to:"om",
    from:"karan",
    time:new Date(),
}]



Chat.insertMany(allChats);

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
