//remove first userinput (which will be the command) and join the remaining elements (search input)
const fetch = require("node-fetch");

module.exports = async function(message, args) { 
    let searchInput = 'fun'; 
        if (args.length > 0) { 
            searchInput = args.join(" ");
        };
 //Tenor GIF API 
    const tenorApi = `https://g.tenor.com/v1/search?q=${searchInput}&key=${process.env.TENORKEY}&ContentFilter=medium`
    let response = await fetch(tenorApi); 
    let json = await response.json(); 
    let randomNumber = Math.floor(Math.random() * json.results.length); 
    message.channel.send(json.results[randomNumber].url);
};