const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const token = process.env['secrettoken'];


const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} carregado com sucesso.`)
    bot.commands.set(props.help.name, props);
  });
});


bot.on('ready', () => {
  var servers = bot.guilds.cache.size;
  console.log('Estou online amigo!');

  bot.user.setActivity(`${servers} servidores`, { type: "LISTENING" });
});

// Create an event listener for messages
bot.on('message', message => {
  if (message.channel.type === "dm") return;

  if (!message.guild) return;

  if (message.content == '.') return;


  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  if (message.content === `${prefix}`) {
    message.reply(`type **${prefix}zap ou .zapestourado** para fifififiufiu`);
  }


  let arquivocmd = bot.commands.get(command.slice(prefix.length));
  if (arquivocmd) return arquivocmd.run(bot, message, args);


});

bot.login(token);