const { model, Schema } = require('mongoose')

const PostSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		forum: {
			type: Schema.Types.ObjectId,
			ref: 'forum',
		},
		thread: {
			type: Schema.Types.ObjectId,
			ref: 'thread',
		},
		subject: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = model('post', PostSchema)
