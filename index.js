const Discord = require('discord.js')
const client = new Discord.Client({
intents: 3276543,
partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
allowedMentions: { parse: ['everyone', 'roles', 'users'], repliedUser: true }
});
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});


const { Intents, Collection, Client, GuildMember, MessageActionRow, WebhookClient,MessagePayload, GatewayIntentBits, MessageSelectMenu, Modal, MessageEmbed,MessageButton, MessageAttachment, Permissions, TextInputComponent} = require('discord.js');
const { readdirSync, statSync , fs} = require('fs');
const chalk = require('chalk')
const { Database, JSONDriver } = require("st.db");
require("dotenv").config();

const settings = require('./config/settings.js');
const options2 = {
  driver: new JSONDriver('./database/Tickets.json')
};
const options3 = {
  driver: new JSONDriver('./database/TicketCount.json')
};
const dbTickets = new Database(options2)
const TC = new Database(options3)

const prefix = settings.prefix
module.exports = { client, settings ,prefix ,dbTickets ,TC };
require('./function/function/ready.js')(client, chalk); 
const initializeCommands = require('./function/commands.js');initializeCommands();

const logAndReturn = (value) => console.log(value);
process.on("unhandledRejection", logAndReturn);
process.on("uncaughtException", logAndReturn);
process.on('uncaughtExceptionMonitor', logAndReturn);
process.on('multipleResolves', logAndReturn);
client.login("MTMwNDE1Nzk4NzI0NTY1ODExMw.G1LTFO.C8T7Mt8uFZGyCha-D8hMwLgHxrWf-rb5W7TY88")