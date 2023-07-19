const React = require('react')

const TextInput = (props) => {
  let placeholder = props.placeholder || ''
  let defaultValue = props.defaultValue || ''
	return (
		<div className='form-group mb-2'>
			<label
				className='form-label'
				htmlFor={props.id}
			>
				{props.label}
			</label>
			<input
				className='form-control'
				id={props.id}
        name={props.name}
				type={props.type}
				placeholder={placeholder}
        defaultValue={defaultValue}
			/>
		</div>
	)
}

module.exports = TextInput
