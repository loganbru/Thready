const React = require('react')

const ForumTreeItem = (props) => {
	return (
		<li className='list-group-item'>
			<span>{props.forum.name}</span>
			<ul className='list-group'>
				{props.forum.children.map((child, index) => (
					<ForumTreeItem
						forum={child}
						key={index}
					/>
				))}
			</ul>
		</li>
	)
}

module.exports = ForumTreeItem
