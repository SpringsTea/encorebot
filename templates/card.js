const Discord = require('discord.js');

module.exports = ({card, locale}) => {

	if(card.lang === 'EN'){
		link = `https://en.ws-tcg.com/cardlist/list/?cardno=${card.set}/${card.side}${card.release}-${card.sid}`
	}
	else{
		link = `https://ws-tcg.com/cardlist/list/?cardno=${card.set}/${card.side}${card.release}-${card.sid}`
	}

	let embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle(`**${locale.name}** (${card.cardcode})`)
	.setURL(link)
	.setDescription(locale.ability.map( (a) => `- ${a}` ))
	.setImage(`http://www.encoredecks.com/images/${card.lang}/${card.side}${card.release}/${card.sid}.gif`)
	.addField('Traits', locale.attributes.toString())
	.addBlankField()
	.addField('Level', card.level, true)
	.addField('Cost', card.cost, true)
	.addField('Color', card.colour, true)

	if(card.lang === 'EN'){
		embed.addField('Links', `[WS](https://en.ws-tcg.com/cardlist/list/?cardno=${card.set}/${card.side}${card.release}-${card.sid})`)
	}
	else{
		embed.addField('Links', `[HotC](https://heartofthecards.com/code/cardlist.html?card=WS_${card.set}/${card.side}${card.release}-${card.sid}) - [WS](${link})`)
	}

	return embed;
}

	
