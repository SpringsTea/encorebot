const Discord = require('discord.js');

module.exports = ({card, locale}) => 
new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`**${locale.name}** (${card.cardcode})`)
	.setURL(`http://www.encoredecks.com/images/${card.lang}/${card.side}${card.release}/${card.sid}.gif`)
	.setDescription(locale.ability.map( (a) => `- ${a}` ))
	.setImage(`http://www.encoredecks.com/images/${card.lang}/${card.side}${card.release}/${card.sid}.gif`)
	.addField('Traits', locale.attributes.toString())
	.addBlankField()
	.addField('Level', card.level, true)
	.addField('Cost', card.cost, true)
	.addField('Color', card.colour, true)
