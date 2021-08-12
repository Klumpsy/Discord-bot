//Import required files and modules 
const gif = require("./commands/gif.js"); 
const helloBot = require("./commands/helloBot.js"); 


//bot message lookup object 
const botCommands = {helloBot, gif}

//botmessage function for replying on userinput
module.exports = async function (message) { 
    if(message.channel.id == "875356593674416159") { 
        let tokens = message.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === "!") { 
            command = command.substring(1); 
            botCommands[command](message, tokens); 
        };
    };
};
    

