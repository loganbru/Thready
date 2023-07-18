const { model, Schema } = require('mongoose')

const UsergroupSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		settings: {
			joinable: {
				type: Boolean,
				default: true,
			},
		},
		permissions: {
			superAdmin: {
				type: Boolean,
				default: false,
			},
		},
	},
	{ timestamps: true }
)

module.exports = model('usergroup', UsergroupSchema)
