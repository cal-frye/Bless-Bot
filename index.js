const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('I am prepared to serve the Lord with my whole heart.')
})

client.on('message', message => {
    
    let args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]) {
        case 'bless' :

            if(args[1] === 'chat') {
                message.channel.send('OH LORD! Bless this chat in the name of the Papa :pizza:, the Pepe :frog:, and the Pu$$y :ok_hand:. Amen.');
            } else if(!args[1]) {
                message.channel.send('Bless you, my child. May the good lord Pepe :frog: rain many dank memes upon your feed this day, now and forever. Amen. :pray:', {
                    files: ["https://media.giphy.com/media/Ko6eiEhQRYQVO/giphy.gif"]
                    });
            } else {
                message.channel.send('While I do not understand your request, my child, I nonetheless bless you, this chat, and all who meme within it.', {
                    files: ["https://media.giphy.com/media/ZSuL021jBST2E/giphy.gif"]
                });
            }
        break;
    }
})

client.login(token);
