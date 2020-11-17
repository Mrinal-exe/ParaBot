const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = async(bot)=>{
    bot.user.setActivity('Paradise OP', { type: 'STREAMING' })


    console.log(`Logged in as ${bot.user.tag}!`);
    
}