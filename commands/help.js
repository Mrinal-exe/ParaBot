const Discord = require('discord.js');
const bot = new Discord.Client();


module.exports.run = (bot,message,args)=>{   

let content = args.slice(2).join(' ')

const helpembed = new Discord.MessageEmbed()
.setDescription(`I WILL NOT HELP YOU `)
.setColor('RANDOM')


message.channel.send(helpembed)
}

module.exports.help ={
    name:"help"
}