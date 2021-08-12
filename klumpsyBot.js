console.log('Beep Beep');

require("dotenv").config(); 

const Discord = require("discord.js"); 
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents}); 

client.login(process.env.BOTTOKEN);

client.on('ready', () => { 
    console.log("Hello there");
});

const messageHandler = require("./botCommands");

client.on('messageCreate', messageHandler); 