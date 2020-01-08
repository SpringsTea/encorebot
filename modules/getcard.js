const axios = require('axios');
const template = require('../templates/card')

module.exports = {
    name: '!card',
    description: 'Fetches a single card',
    execute(msg, args) {
    	console.log('Fire getcard')
      
    	//TODO need endpoint for individual card
    	axios.get('http://www.encoredecks.com/api/deck/kxSxpZOKg')
    	.then((res) => {
    		let card = res.data.cards[0]
    		//TODO replace with static cardcode when available
    		card.cardcode = `${card.set}/${card.side}${card.release}-${card.sid}`
    		let locale = card.locale.EN ? card.locale.EN : card.locale.JP


    		msg.channel.send(template({card, locale}))
    	})

    },
};