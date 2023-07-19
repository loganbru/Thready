const React = require('react')
const Admin = require('../layouts/admin')
const TextInput = require('../components/forms/inputs/text.input')
const InlineChecks = require('../components/forms/inputs/inline-checks.input')
const TextArea = require('../components/forms/inputs/text-area.input')
const Select = require('../components/forms/inputs/select.input')
const Button = require('../components/forms/buttons/default.button')

const NewForum = (props) => {
	let parentForumOptions = props.data.forumList.map(forum => ({value: forum._id, text: forum.name}))
	return (
		<Admin>
			<div className='row'>
				<form action='/admin/forums/new' method='post'>
					<div className='col-12 col-lg-10 col-xl-8 mb-4'>
						<div className='card'>
							<div className='card-body'>
								<h5 className='card-title mb-4'>Forum Details</h5>
								<TextInput
									label='Forum Name'
									type='text'
									name='forumName'
									id='forumName'
								/>
								<hr />
								<InlineChecks
									label='Forum Type'
									helpText='Select the type of forum you are creating - a forum you can post in, or a category, which contains other forums.'
									checkType='radio'
									options={[
										{
											id: 'forumRadio',
											value: 'for',
											label: 'Forum',
											name: 'forumType',
										},
										{
											id: 'categoryRadio',
											value: 'cat',
											label: 'Category',
											name: 'forumType',
										},
									]}
								/>
								<hr />
								<TextArea
									label='Description'
									name='forumDescription'
									id='forumDescription'
									rows='5'
									placeholder='Describe this forum (Topic, post types, etc.)'
								/>
								<hr />
								<div className='row'>
									<div className='col-12 col-lg-6'>
										<Select
											label='Parent Forum'
											id='parentForum'
											name='parentForum'
											defaultValue='No Parent'
											options={parentForumOptions}
										/>
									</div>
									<div className='col-12 col-lg-6'>
										<TextInput
											label='Display Order'
											type='number'
											name='forumDisplayOrder'
											id='forumDisplayOrder'
											defaultValue='0'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-10 col-xl-8'>
						<div className='card'>
							<div className='card-body text-center'>
								<Button
									style='phoenix-primary'
									size='md'
									type='submit'
									text='Save Forum'
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</Admin>
	)
}

module.exports = NewForum
