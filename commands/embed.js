const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{   

let content = args.slice(2).join(' ')

const embedname = new Discord.MessageEmbed()
.setDescription(content)
.setColor('RANDOM')


message.channel.send(embedname)
}

module.exports.help ={
    name:"embed"
}