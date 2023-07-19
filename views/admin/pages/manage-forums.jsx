const React = require('react')
const Admin = require('../layouts/admin')
const ForumTreeItem = require('../components/custom/forum-tree/forum-tree-item')

const ManageForums = (props) => {
	let forums = props.data.forums
	return (
		<Admin>
			<div className='row'>
				<div className='col-12 col-lg-10 col-xl-8'>
					<div className='card'>
						<div className='card-body'>
							<table className='table table-borderless'>
								<thead>
									<tr>
										<th scope='col' className='text-start' width='80%'></th>
										<th scope='col' className='text-end' width='20%'></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Master Forum</td>
										<td className='text-end'>
											<button
												className='btn btn-phoenix-primary btn-sm me-1 mb-1'
												type='button'
											>
												Edit
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					{/* <ul className='list-group'>
						{forums.map((forum, index) => (
							<ForumTreeItem
								forum={forum}
								key={index}
							/>
						))}
					</ul> */}
				</div>
			</div>
		</Admin>
	)
}

module.exports = ManageForums
