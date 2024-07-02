const express = require('express');
const bobyparser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bobyparser.json());
app.use(bobyparser.urlencoded({extended : true}));

app.post('/webhook', (req, res) =>{
    const {message} = req.body;

    if(!message || message.text.toLowerCase().indexOf("macro") < 0){
        return res.end();
    }

    axios.post(
        "https://api.telegram.org/bot7476352730:AAESj4EPLUGJsyglNW7MH96HhPlZRf_aIbs/sendMessage",
        {
            chat_id: message.chat_id,
            text: "Polo!!",
        }
    ).then((responose) => {
        console.log("Message Successfully Posted.....", responose);
        res.end("ok");
    }).catch((err) => {
        console.log("Error: ", err);
        res.end("Error: "+err);
    });
})

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});