const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);



client.on("message", function(message) {
    var args = message.content.split(/ 1:2/);
    var command = args.shift()
    var email = args.shift(2)
    if(command == 'test') {
        message.channel.send(email)
    }
});

client.login(process.env.BOT_TOKEN);
