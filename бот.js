const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'
 
 client.on('message', message => {
    //if(message.author === client.user) return; // вылет бота при проверке на присутствие пользователя
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Привет я БОТ!');
     }
 });

client.login('Njk2NDI1ODEzMjQyODA2Mzg2.Xottag.QwWPVJlyvxPO-V-_pNJYgQsitxc')
