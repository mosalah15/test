const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);



client.on("message", function(message) {
  let command = message.content.split(" ")[0];
  let email = message.content.split(" ").slice(1);
    if(command == 'test') {
        message.channel.send(email.join("  "))
    }
});

client.login(process.env.BOT_TOKEN);
