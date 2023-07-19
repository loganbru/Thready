const React = require('react')

const TextArea = (props) => {
  let placeholder = props.placeholder || ''
	return (
		<div className='form-group mb-2'>
			<label
				className='form-label'
				htmlFor={props.id}
			>
				{props.label}
			</label>
			<textarea
				className='form-control'
				id={props.id}
				name={props.name}
        rows={props.rows}
				placeholder={placeholder}
			></textarea>
		</div>
	)
}

module.exports = TextArea
