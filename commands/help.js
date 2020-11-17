const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{
    const helpembed = new Discord.MessageEmbed()
    .setDescription(`I WON'T HELP YOU`)
    .setColor('RANDOM')
   message.reply(helpembed)
}

module.exports.help ={
    name:"ping"
}