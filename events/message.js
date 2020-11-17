const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix} = require('../config.json')

module.exports = async(bot,message)=>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

  if((message.content === "<@775654294242066434>") || (message.content === "<@!775654294242066434>")){
    message.channel.send(`My Prefix is \`${config.prefix}\``)
  }

  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);
}