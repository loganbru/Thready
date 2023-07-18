const { User } = require('../models')

const authenticate = (req, res, next) => {
	if (req.session.loggedIn) {
		// User.findOne({ _id: req.session.userId }).then((result) => {
		// 	res.locals.user = result
		// 	next()
		// })
		next()
	} else {
		res.redirect('/login')
	}
}

module.exports = authenticate
