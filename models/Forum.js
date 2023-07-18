const { model, Schema } = require('mongoose')

const ForumSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		}
	},
	{ timestamps: true }
)

module.exports = model('forum', ForumSchema)
