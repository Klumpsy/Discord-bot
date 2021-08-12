console.log('Beep Beep');

require("dotenv").config(); 

const fetch = require("node-fetch"); 
const Discord = require("discord.js"); 
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents}); 
client.login(process.env.BOTTOKEN);

client.on('ready', () => { 
    console.log("Hello there");
});

//standard bot replies array
const replies = ["And hi back to you! Welcome on the server of my master!", 
                "NOOOO don't leave me with my master :(",
                "Wauw, me? You rock!"]


client.on('messageCreate', async message => { 

//split user input
let tokens = message.content.split(" "); 
let searchInput = 'fun'; 
    if (tokens.length > 1) { 

//remove first userinput (which will be the command) and join the remaining elements (search input)
    searchInput = tokens.slice(1, tokens.length).join(" ");
    }

    if(message.channel.id == "875356593674416159" && tokens[0] === "hi there") { 
        message.reply(replies[0]);
    } else if (message.channel.id == "875356593674416159" && tokens[0] === "!byeBot") { 
        message.reply(replies[1]);
    } else if (message.channel.id == "875356593674416159" && tokens[0] === "!loveBot") { 
        message.reply(replies[2]);
    } else if (message.channel.id == "875356593674416159" && tokens[0] === "!gif") { 
        
//Tenor GIF API 
 const tenorApi = `https://g.tenor.com/v1/search?q=${searchInput}&key=${process.env.TENORKEY}&ContentFilter=medium`
        let response = await fetch(tenorApi); 
        let json = await response.json(); 
        let randomNumber = Math.floor(Math.random() * json.results.length); 
        message.channel.send(json.results[randomNumber].url);
    };
});
