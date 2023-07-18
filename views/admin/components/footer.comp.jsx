const React = require('react')

const Footer = (props) => {
	return (
		<footer className='footer position-absolute'>
			<div className='row g-0 justify-content-between align-items-center h-100 text-uppercase'>
				<div className='col-12 col-sm-auto text-center fs--2 '>
					<ul className='nav'>
						<li className='nav-item'>
							<span className='nav-text text-orange'>Powered by Thready</span>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								aria-current='page'
								href='https://thready.dev/docs/getting-started'
							>
								Getting Started
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://thready.dev/docs/'
							>
								Documentation
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://thready.dev/help'
							>
								Help
							</a>
						</li>
					</ul>
				</div>
				<div className='col-12 col-sm-auto text-center fs--2'>
					<p className='mb-0 text-600'>
						Version{' '}
						<a
							className='text-success text-opacity-100'
							href='https://thready.dev/versions/1.13.0'
						>
							1.13.0
						</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

module.exports = Footer
