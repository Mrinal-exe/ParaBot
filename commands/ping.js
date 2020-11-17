const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{

   

    message.reply(`Pong!`);
}

module.exports.help ={
    name:"ping"
}