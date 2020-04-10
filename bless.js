module.exports = {
	name: 'bless',
	description: 'Bless',
	execute(message, args) {
		if (!args[0]) {
			message.channel.send('Bless you, my child. May the good lord Pepe :frog: rain many dank memes upon your feed this day, now and forever. Amen. :pray:', {
				files: ["https://media.giphy.com/media/Ko6eiEhQRYQVO/giphy.gif"]
			});
		} else if (args[0] === 'chat') {
			message.channel.send('OH LORD! Bless this chat in the name of the Papa :pizza:, the Pepe :frog:, and the Pu$$y :ok_hand:. Amen.');
		} else if (args[0] === 'me') {
			message.reply('by the power of the Hoely Spirits, may you get this daily bread. Amen. :relieved::ok_hand:');
		} else {
			message.channel.send('While I do not understand your request, my child, I nonetheless bless you, this chat, and all who meme within it. :relieved::pray:', {
				files: ["https://media.giphy.com/media/ZSuL021jBST2E/giphy.gif"]
			}
		)};
	},
};