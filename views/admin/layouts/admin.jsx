const React = require('react')
const Meta = require('../util/meta.util')
const Favicons = require('../util/favicons.util')
const Scripts = require('../util/scripts.util')
const Preconnects = require('../util/preconnects.util')
const Styles = require('../util/styles.util')
const NavbarVertical = require('../components/navbar-vertical.comp')
const NavbarTop = require('../components/navbar-top.comp')
const Footer = require('../components/footer.comp')

const Admin = (props) => {
	return (
		<html
			lang='en-US'
			dir='ltr'
		>
			<head>
				<Meta />

				<title>Thready | Dashboard</title>

				<Favicons />
				<Scripts
					list={[
						'/admin/assets/vendors/imagesloaded/imagesloaded.pkgd.min.js',
						'/admin/assets/vendors/simplebar/simplebar.min.js',
						'/admin/assets/js/config.js',
					]}
				/>
				<Preconnects
					list={['https://fonts.googleapis.com', 'https://fonts.gstatic.com']}
				/>
				<Styles
					list={[
						'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&amp;display=swap',
						'/admin/assets/vendors/simplebar/simplebar.min.css',
						'https://unicons.iconscout.com/release/v4.0.8/css/line.css',
						'/admin/assets/vendors/choices/choices.min.css',
						'/admin/assets/css/theme.min.css',
						'/admin/assets/css/user.min.css',
					]}
				/>
			</head>

			<body className='nav-slim'>
				<main
					className='main'
					id='top'
				>
					<NavbarVertical />
					<NavbarTop />
					<div className='content'>
						{props.children}
						<Footer />
					</div>
				</main>

				<Scripts
					list={[
						'/admin/assets/vendors/popper/popper.min.js',
						'/admin/assets/vendors/bootstrap/bootstrap.min.js',
						'/admin/assets/vendors/anchorjs/anchor.min.js',
						'/admin/assets/vendors/is/is.min.js',
						'/admin/assets/vendors/fontawesome/all.min.js',
						'/admin/assets/vendors/lodash/lodash.min.js',
						'https://polyfill.io/v3/polyfill.min.js?features=window.scroll',
						'/admin/assets/vendors/list.js/list.min.js',
						'/admin/assets/vendors/feather-icons/feather.min.js',
						'/admin/assets/vendors/dayjs/dayjs.min.js',
						'/admin/assets/vendors/choices/choices.min.js',
						'/admin/assets/js/phoenix.js',
						'/admin/assets/js/nav-controller.min.js',
					]}
				/>
			</body>
		</html>
	)
}

module.exports = Admin
