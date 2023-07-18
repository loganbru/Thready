const site = {
	version: '1.0.0',
	pages: {
		login: {
			name: 'Login',
			href: '/login',
			render: 'pages/login',
			styles: [],
			scripts: [],
		},
		dashboard: {
			name: 'Dashboard',
			href: '/dashboard',
			render: 'pages/dashboard',
			styles: [],
			scripts: [],
		},
		invoices: {
			name: 'Invoices',
			href: '/invoices',
			render: 'pages/invoices',
			styles: [],
			scripts: [],
		},
		newInvoice: {
			name: 'New Invoice',
			href: '/invoices/new',
			render: 'pages/new-invoice',
			styles: [],
			scripts: ['/assets/vendors/jquery/jquery.min.js', '/assets/vendors/masked-input/masked-input.min.js', '/assets/js/masked-input.init.js'],
		},
		viewInvoice: {
			name: 'View Invoice',
			href: '/invoices/:transactionNumber',
			render: 'pages/view-invoice',
			styles: [],
			scripts: ['/assets/vendors/jquery/jquery.min.js', '/assets/vendors/masked-input/masked-input.min.js', '/assets/js/masked-input.init.js'],
		},
	},
}

module.exports = site
