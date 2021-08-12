console.log('Beep Beep');

const Discord = require("discord.js"); 
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents}); 
client.login("ODc1MzM5NTA0MTYzMTE5MTc0.YRUFcA.S6y2XXGLHCM2egR46t0FXQO24Ow");

client.on('ready', () => { 
    console.log("Hello there");
});


const replies = ["And hi back to you! Welcome on the server of my master!", "NOOOO don't leave me with my master :(", "Wauw, me? You rock!"]

client.on('messageCreate', message => { 
    if(message.channel.id == "875356593674416159" && message.content === "hi there") { 
        message.reply(replies[0]);
    } else if (message.channel.id == "875356593674416159" && message.content === "!byeBot") { 
        message.reply(replies[1]);
    } else if (message.channel.id == "875356593674416159" && message.content === "!loveBot") { 
        message.reply(replies[2]);
    };
});

