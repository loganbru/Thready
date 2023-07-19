const db = require('../models')
const { findOneAndUpdate } = require('../models/User')

const displayOrderCompare = (a, b) => {
	if (a.displayOrder > b.displayOrder) {
		return 1
	}
	if (a.displayOrder < b.displayOrder) {
		return -1
	}
	return 0
}

async function sortArrayOfObjects(forums) {
  const masterForums = [];
  const visited = new Set();

  // Find top-level forums
  forums.forEach((forum) => {
    if (!forum.parentForum) {
      masterForums.push(forum);
    }
  });

  // Breadth-first search to sort nested children
  const queue = [...masterForums];
  while (queue.length > 0) {
    const forum = queue.shift();
    if (forum.children && forum.children.length > 0) {
      forum.children.sort((a, b) => a.displayOrder - b.displayOrder);
      forum.children.forEach((child) => {
        if (!visited.has(child._id)) {
          queue.push(child);
          visited.add(child._id);
        }
      });
    }
  }

  // Sort master forums
  masterForums.sort((a, b) => a.displayOrder - b.displayOrder);

  return masterForums;
}

module.exports = {
	create: async (name, desc, type, parent, displayOrder) => {
		let newForumDoc =
			parent === ''
				? await db.Forum.create({
						name: name,
						description: desc,
						forumType: type,
						displayOrder: displayOrder,
						children: [],
				  })
				: await db.Forum.create({
						name: name,
						description: desc,
						forumType: type,
						parentForum: parent,
						displayOrder: displayOrder,
						children: [],
				  })

		if (parent === '') {
			return newForumDoc
		} else {
			let updateQuery = await db.Forum.findOneAndUpdate(
				{ _id: parent },
				{ $push: { children: newForumDoc._id } }
			)
			let updatedParentDoc = await db.Forum.findOne({ _id: updateQuery._id })
			if (updatedParentDoc.children.length <= updateQuery.children.length) {
				// update failed
				console.log('update failed')
			} else {
				console.log('updated successful')
			}
			return newForumDoc
		}
	},
	list: {
		listAll: async () => {
			let forums = await db.Forum.find()
			return forums
		},
		listAllInOrder: async () => {
			let masterForums = []
			let forums = await db.Forum.find().populate({
				path: 'children',
				populate: {
					path: 'children',
					populate: {
						path: 'children',
						populate: {
							path: 'children',
						},
					},
				},
			})
			forums.forEach((forum, index) => {
				if (!forum.parentForum) {
					masterForums.push(forum)
				}
			})
			// let sortedChildren = await masterForums[0].children.sort((a, b) => (a.displayOrder > b.displayOrder) ? 1 : -1)
			for (let index = 0; index < masterForums.length; index++) {
				await masterForums[index].children.sort(displayOrderCompare)
			}
			return masterForums.sort(displayOrderCompare)
		},
		listAllInOrderNested: async () => {
      let forums = await db.Forum.find().populate({
				path: 'children',
				populate: {
					path: 'children',
					populate: {
						path: 'children',
						populate: {
							path: 'children',
						},
					},
				},
			})
      const sortedArray = await sortArrayOfObjects(forums)
      return sortedArray
		},
	},
}
