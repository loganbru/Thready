const { model, Schema } = require('mongoose')

const ThreadSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		forum: {
			type: Schema.Types.ObjectId,
			ref: 'forum',
		},
		masterPost: {
			type: Schema.Types.ObjectId,
			ref: 'post',
		},
		subject: {
			type: String,
			required: true,
		},
		lastPost: {
			type: Schema.Types.ObjectId,
			ref: 'post',
		},
		viewCount: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
)

module.exports = model('thread', ThreadSchema)
