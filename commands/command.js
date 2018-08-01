const Discord = require("discord.js");

module.exports.run = async (prefix, messageArray, cmd, bot, message, args, author, guild, lang) => {
  return message.channel.send("Hello World!")
}

module.exports.help = {
  name: "command" // Command name here
}
