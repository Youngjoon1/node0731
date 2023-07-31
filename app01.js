const express = require("express");
const app = express();

let con;
app.get("/", (req,res)=>{
    console.log("1.연동전 async");
    con = connect();
    con.then((msg)=>{
        console.log("3. 연동 완료 후 특정 기능 사용");
        res.send("con=>"+con);    
    });
    
});

app.get("/async", async (req,res)=>{
    console.log("1.연동전");
    con = await connect();
    console.log("3. 연동 완료 후 특정 기능 사용. async");
    res.send("con=>"+con);
            
});

const connect = () => {
    let msg;
    return new Promise((resolve)=> setTimeout(()=>{
        msg = "DB연동 되었습니다. async";
        console.log("2.DB연동하는 중... async"); 
        resolve(msg);
    }, 1000));
        
    //return msg;
}

app.listen("3000",()=>{console.log("3000연동 성공");});




