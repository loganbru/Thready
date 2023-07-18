const React = require('react')

const Scripts = (props) => {
	return (
		<>
			{props.list.map((script, index) => (
				<script
					src={script}
					key={index}
				></script>
			))}
		</>
	)
}

module.exports = Scripts
