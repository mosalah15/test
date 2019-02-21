const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);



client.on("message", function(message) {
  let command = message.content.split(" ")[0];
  let password = message.content.split(" ").slice(2);
  let email = (!command,password); 
    if(command == 'test') {
        message.channel.send(email.join("  "))
        message.channel.send(password.join("  "))
    }
});

client.login(process.env.BOT_TOKEN);
