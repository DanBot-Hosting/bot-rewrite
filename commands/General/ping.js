const { MessageEmbed } = require("discord.js")


module.exports.run = async (client, message, args) => {
    message.channel.send({
        embeds: [new MessageEmbed().setTitle("Pong!").setColor("#6f89d9")
        .addField(`> 🖥 API Latency:`, `**${client.ws.ping}ms**`, true)
        .addField(`> 🤖 Bot Latency:`, `**${Date.now() - message.createdTimestamp}ms**`, true)
        .setFooter(`Requested by ${message.author.tag}`).setTimestamp()]
    });
}

module.exports.info = {
    name: 'ping', // default = file name (without the extention)
    description: "Shows the bot's ping." // default is "None"
}
