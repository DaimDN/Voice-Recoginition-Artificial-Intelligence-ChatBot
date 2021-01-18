const express = require('express');
const app = express();
const port = 4000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.use(express.static(__dirname + '/public'));



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')






app.get('/', function(req, res){
    res.render('index')
})

app.post('/', function(req, res){
    var message = req.body.data;
    


        
        if(message === "hi"){
            res.json({msg: "Hi, How are you"});
            
               
           // io.emit( 'chat_message',"Hi, How are you");
        }
        else if(message ==="fine"){
            res.json({msg: "Good to Know, Whatsup"});
           // io.emit('chat_message', "Good to Know, whats up ?");
    
        }
        else if(message === "good"){
            res.json({msg: "Good to know, whats up"})
            //io.emit('chat_message', "Good to Know, whats up ?");
        }
        else{
            res.json({msg: "Sorry, i cant get that"});
            //io.emit('chat_message', "Sorry, i cant get that"  );
    
        }
      
       


  
})



http.listen(port, function(){
    console.log("Server is up an running on port" + port);
})