const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('I am prepared to serve the Lord with my whole heart.')
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}bless`)) {
        message.channel.send("Bless you, my child. May the good lord Pepe rain many dank memes upon your feed this day, now and forever. Amen.", {
            files: ["https://media.giphy.com/media/Ko6eiEhQRYQVO/giphy.gif"]
        })
    }
})

client.login(token);