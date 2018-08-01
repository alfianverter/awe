const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Anime")
.setDescription("There are currently 2 commands in this category.")
.addField("`t!anime`", "Provide anime information.")
.addField("`t!manga`","Provide manga for an anime.")
message.channel.send(embed);
}

module.exports.help = {
  name: "animecmds"
}