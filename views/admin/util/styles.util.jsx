const React = require('react')

const Styles = (props) => {
	return (
		<>
			{props.list.map((style, index) => (
				<link
					href={style}
					rel='stylesheet'
					key={index}
				/>
			))}
		</>
	)
}

module.exports = Styles
