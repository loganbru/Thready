const React = require('react')

const Select = (props) => {
	return (
		<>
			<label
				className='form-label'
				htmlFor={props.id}
			>
				{props.label}
			</label>
			<select
				className='form-select'
				id={props.id}
				name={props.name}
				data-choices='data-choices'
				data-options='{"removeItemButton":true,"placeholder":true}'
			>
				<option value=''>{props.defaultValue}</option>
				{props.options.map((option, index) => (
					<option
						value={option.value}
						key={index}
					>
						{option.text}
					</option>
				))}
			</select>
		</>
	)
}

module.exports = Select
