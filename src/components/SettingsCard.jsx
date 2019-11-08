import React, { Component } from 'react';

class SettingsCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='small-card settings-card' id='signInCard'>
				<div className='default-view' id='settings-card-default'>
					<h1 className='welcomeHeader' id='welcomeHeader'>
						Choose Your Profile:
					</h1>
					<div className='signInRow'>
						<select className='userSelect' name='Username' id='usernameSelect'>
							<option value='New User'>New User</option>
							{/* <!-- The rest of this list is populated in toggleSettings.js --> */}
						</select>
						<div className='signInButton' id='signInButton'>
							Sign In
						</div>
					</div>
				</div>
				<div className='sign-in-overlay hidden' id='settings-card-overlay'>
					<h1 className='welcomeHeader'>Choose Your Username:</h1>
					<div className='signInRow'>
						<input className='usernameInputField' id='userNameInputField' />
						<div className='signInButton' id='newUserSignInButton'>
							Sign In
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SettingsCard;
