const discord = require("discord.js");
const behavior = require("./src/services/behaviors");

const bot = new discord.Client();
const token = "ODU0MjI4NjY1OTY1NjA4OTYw.YMg4cA.2IgX0sMrWoftg68hlS9dNi3xukA";

bot.login(token)

bot.on('message', message => {
    // If the message is "ping"
    if (message.content === '!twitch') {
      // Send "pong" to the same channel
      message.channel.send('https://www.twitch.tv/vvfps');
    }

    if (message.content === 'wima') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }

    if(message.content === "htb"){
        const embed = new discord.MessageEmbed()
        embed.setTitle("XAMA").setColor(0xff0000)
        message.channel.send(embed);
    }

    if (message.content === '/joinvv') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
          const connection = message.member.voice.channel.join();
        } 
    }
});