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
			default: '/client/assets/img/icons/default-forum.svg',
		},
		forumType: {
			type: String, // for=forum, cat=category
			required: true,
		},
		parentForum: {
			type: Schema.Types.ObjectId,
			ref: 'forum',
		},
		displayOrder: {
			type: Number,
			required: true,
		},
		children: [
			{
				type: Schema.Types.ObjectId,
				ref: 'forum',
			},
		],
	},
	{ timestamps: true }
)

module.exports = model('forum', ForumSchema)
