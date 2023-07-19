const React = require('react')
const Admin = require('../layouts/admin')
const ForumTreeItem = require('../components/custom/forum-tree/forum-tree-item')

const ManageForums = (props) => {
	let forums = props.data.forums
	return (
		<Admin>
			<div className='row'>
				<div className='col-12'>
					<ul className='list-group'>
						{forums.map((forum, index) => (
							<ForumTreeItem
								forum={forum}
								key={index}
							/>
						))}
					</ul>
				</div>
			</div>
		</Admin>
	)
}

module.exports = ManageForums
