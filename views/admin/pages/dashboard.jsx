const React = require('react')
const Admin = require('../layouts/admin')

const Dashboard = (props) => {
	return (
		<Admin>
			<div className='row'>
				<div className='col-12'>
					<h5>main content</h5>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa
						quibusdam, animi et dicta odio nam, enim aliquid voluptas ratione
						quae recusandae repellendus excepturi harum sequi iure a vel
						doloremque?
					</p>
				</div>
			</div>
		</Admin>
	)
}

module.exports = Dashboard
