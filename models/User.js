const { model, Schema } = require('mongoose')

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		hash: {
			type: String,
			required: true,
		},
		displayName: {
			type: String,
			required: true,
		},
		userTitle: {
			type: String,
			default: 'New User',
		},
		avatar: {
			type: String,
			default: '/client/uploads/images/avatars/default-avatar.png',
		},
		primaryUsergroup: {
			type: Schema.Types.ObjectId,
			ref: 'usergroup',
		},
		usergroups: [
			{
				type: Schema.Types.ObjectId,
				ref: 'usergroup',
			},
		],
	},
	{ timestamps: true }
)

module.exports = model('user', UserSchema)
