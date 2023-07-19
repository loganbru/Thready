const React = require('react')

const InlineChecks = (props) => {
	return (
		<div className='form-group mb-2'>
			<label className='form-label'>{props.label}</label>
			<div className='form-text'>{props.helpText}</div>
			{props.options.map((option, index) =>
				index === 0 ? (
					<div
						className='form-check form-check-inline'
						key={index}
					>
						<input
							className='form-check-input'
							id={option.id}
							type={props.checkType}
							name={option.name}
							value={option.value}
              defaultChecked
						/>
						<label
							className='form-check-label'
							htmlFor={option.id}
						>
							{option.label}
						</label>
					</div>
				) : (
					<div
						className='form-check form-check-inline'
						key={index}
					>
						<input
							className='form-check-input'
							id={option.id}
							type={props.checkType}
							name={option.name}
							value={option.value}
						/>
						<label
							className='form-check-label'
							htmlFor={option.id}
						>
							{option.label}
						</label>
					</div>
				)
			)}
		</div>
	)
}

module.exports = InlineChecks
