module.exports = ({card, locale}) => 
`
**${locale.name}** (${card.cardcode})
${card.level}/${card.cost} ${card.colour} ${card.cardtype}
${locale.attributes.toString()}

${locale.ability.map( (a) => a )}

http://www.encoredecks.com/images/${card.lang}/${card.side}${card.release}/${card.sid}.gif
`