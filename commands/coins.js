const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

    message.channel.send(":white_check_mark: | **A private message has been send!**")
  message.author.send(coinEmbed).then(message =>{message.react("🤑")});
}

module.exports.help = {
  name: "coins"
}