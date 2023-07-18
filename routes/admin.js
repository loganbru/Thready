const router = require('express').Router()
const bcrypt = require('bcrypt')

const authenticateAdmin = require('../middleware/authenticateAdmin')

// import config data
const config = {
	session: require('../config/session'),
}


const db = require('../models')

router.use(config.session)

router.get('/', (req, res) => res.redirect('/admin/dashboard'))

router.get('/dashboard', (req, res) => {
	res.render('admin/pages/dashboard')
})

router.get('/express-login/:userId', async (req, res) => {
	let user = await db.User.findOne({ _id: req.params.userId })
	if (!user) {
		res.end('No user found')
	}
	req.session.loggedIn = true
	req.session.userId = user._id
	res.redirect('/admin/dashboard')
})

router.get('/create-install-data', async (req, res) => {
	let adminUser = {
		username: 'Admin',
		email: 'brunnerlogan7@gmail.com',
		password: 'Tanager@007',
	}

	// create default usergroups
	const adminUsergroupDoc = await db.Usergroup.create({
		name: 'Administrator',
		description: 'Forum Administrators',
		settings: {
			joinable: false,
		},
		permissions: {
			superAdmin: true,
		},
	})
	console.log('created admin usergroup')

	const defaultUsergroupDoc = await db.Usergroup.create({
		name: 'Default User',
		description: 'Default usergroup',
		settings: {
			joinable: true,
		},
		permissions: {
			superAdmin: false,
		},
	})
	console.log('created default usergroup')

	// create superadmin user and add to admin group
	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(adminUser.password, salt)

	let adminUserDoc = await db.User.create({
		username: adminUser.username.toLowerCase(),
		email: adminUser.email.toLowerCase(),
		hash: hash,
		displayName: adminUser.username,
		userTitle: 'Administrator',
		primaryUsergroup: adminUsergroupDoc._id,
	})
	console.log('created admin user')

	// push admin and default usergroups to admin user usergroups array
	const usergroupArrayUpdate = await db.User.updateOne(
		{ _id: adminUserDoc._id },
		{
			$push: {
				usergroups: { $each: [adminUsergroupDoc._id, defaultUsergroupDoc._id] },
			},
		}
	)
	res.end('Install data created')
})

module.exports = router
