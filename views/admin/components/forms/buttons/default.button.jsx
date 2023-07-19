const React = require('react')

const Button = (props) => {
	return (
		<button
			className={`btn btn-${props.style} btn-${props.size}`}
			type={props.type}
		>
			{props.text}
		</button>
	)
}

module.exports = Button
