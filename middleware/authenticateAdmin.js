const db = require('../models')

const authenticateAdmin = async (req, res, next) => {
	if (req.session.loggedIn) {
    let user = await db.User.findOne({ _id: req.session.userId }).populate('primaryUsergroup')
    if (user.primaryUsergroup.permissions.superAdmin === true) {
      res.locals.user = user
      next()
    } else {
      res.end('Not authorized admin')
    }
	} else {
		res.redirect('/login')
	}
}

module.exports = authenticateAdmin
