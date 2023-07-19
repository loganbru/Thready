const React = require('react')

const NavbarVertical = (props) => {
	return (
		<nav className='navbar navbar-vertical navbar-expand-lg'>
			<div
				className='collapse navbar-collapse'
				id='navbarVerticalCollapse'
			>
				<div className='navbar-vertical-content'>
					<ul
						className='navbar-nav flex-column'
						id='navbarVerticalNav'
					>
						<li className='nav-item'>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link label-1 nav-single'
									href='/admin/dashboard'
								>
									<div className='d-flex align-items-center'>
										<span className='nav-link-icon'>
											<span data-feather='grid'></span>
										</span>
										<span className='nav-link-text'>Dashboard</span>
									</div>
								</a>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-errors'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-errors'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='sliders'></span>
										</span>
										<span className='nav-link-text'>Configuration</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-errors'
									>
										<li className='collapsed-nav-item-title d-none'>
											Configuration
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/settings'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Settings</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/plugins'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Plugins</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/update'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Update</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-forums'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-forums'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='message-square'></span>
										</span>
										<span className='nav-link-text'>Forums</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-forums'
									>
										<li className='collapsed-nav-item-title d-none'>Forums</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/forums'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Manage Forums</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/forums/new'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>New Forum</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-users'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-users'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='users'></span>
										</span>
										<span className='nav-link-text'>Users</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-users'
									>
										<li className='collapsed-nav-item-title d-none'>Users</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/users'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Manage Users</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/users/groups'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>User Groups</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/users/banning'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Banning</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-frontend'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-frontend'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='globe'></span>
										</span>
										<span className='nav-link-text'>Frontend</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-frontend'
									>
										<li className='collapsed-nav-item-title d-none'>
											Frontend
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/frontend/settings'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Settings</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/frontend/themes'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Themes</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-api'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-api'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='share-2'></span>
										</span>
										<span className='nav-link-text'>API</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-api'
									>
										<li className='collapsed-nav-item-title d-none'>API</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/api/endpoints'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Endpoints</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/api/keys'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Keys</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/api/logs'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Logs</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='nav-item-wrapper'>
								<a
									className='nav-link dropdown-indicator label-1'
									href='#nv-maintenance'
									role='button'
									data-bs-toggle='collapse'
									aria-expanded='false'
									aria-controls='nv-maintenance'
								>
									<div className='d-flex align-items-center'>
										<div className='dropdown-indicator-icon'>
											<span className='fas fa-caret-right'></span>
										</div>
										<span className='nav-link-icon'>
											<span data-feather='coffee'></span>
										</span>
										<span className='nav-link-text'>Maintenance</span>
									</div>
								</a>
								<div className='parent-wrapper label-1'>
									<ul
										className='nav collapse parent'
										data-bs-parent='#navbarVerticalCollapse'
										id='nv-maintenance'
									>
										<li className='collapsed-nav-item-title d-none'>API</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/maintenance'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Overview</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/maintenance/database'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Database</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/maintenance/health'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>System Health</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/maintenance/reports'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Reports</span>
												</div>
											</a>
										</li>
										<li className='nav-item'>
											<a
												className='nav-link'
												href='/admin/maintenance/logs'
												data-bs-toggle=''
												aria-expanded='false'
											>
												<div className='d-flex align-items-center'>
													<span className='nav-link-text'>Logs</span>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-vertical-footer'>
				<button className='btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center'>
					<span className='uil uil-left-arrow-to-left fs-0'></span>
					<span className='uil uil-arrow-from-right fs-0'></span>
					<span className='navbar-vertical-footer-text ms-2'>
						Collapsed View
					</span>
				</button>
			</div>
		</nav>
	)
}

module.exports = NavbarVertical
