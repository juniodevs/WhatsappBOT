const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

const fs = require('fs');
var voiceChannel = message.member.voice.channel;
if (!voiceChannel) {
  message.reply('entre em um canal de voz primeiro!');
} else {

const msg = await message.channel.send('**<a:loading:785275244788449293> | Carregando áudio...**')
setTimeout(() => {
    msg.edit('**▶ | Reproduzindo áudio...**');    }, 3000)
  voiceChannel.join()
  .then(connection => {
    connection.play("https://cdn.sndup.net/jgjg/whastsapp.ogg?token=_GrLhpzCBpxNq6KlH_ANnZ21FnQVjPa3aBFY7cijn_E&token_path=%2Fjgjg%2F&expires=1655060121", { volume: 10}).on("finish", () => {
      msg.edit("**✅ | O áudio foi reproduzido. \nDeseja baixá-lo ou escutá-lo novamente? \nLink: `https://replit.com/@soraxartsz/WhatsappBOT#whastsapp.ogg**`");
      setTimeout(() => {
            voiceChannel.leave();
  message.reply('**fui desconectado do canal de voz!**')
    }, 3000)

    });;
  })
  
}
  }


exports.help = {
  name: "zapestourado"
}