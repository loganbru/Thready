const React = require('react')

const Preconnects = (props) => {
	return (
		<>
			{props.list.map((preconnect, index) => (
				<link
					rel='preconnect'
					href={preconnect}
					key={index}
				/>
			))}
		</>
	)
}

module.exports = Preconnects
