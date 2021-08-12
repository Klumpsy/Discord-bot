console.log('Beep Beep');

const Discord = require("discord.js"); 
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents}); 
client.login("ODc1MzM5NTA0MTYzMTE5MTc0.YRUFcA.ZPeVUMPpYtO48xMdXlCpaD0owgQ");

client.on('ready', () => { 
    console.log("Hello there");
});

client.on('messageCreate', message => { 
    if(message.channel.id == "875356593674416159" && message.content === "hi there") { 
        message.reply("And hi back to you! Welcome on the server of my master!");
    };
});