import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<header id='header' className='header'>
				<nav className='headerNav'>
					<h1 className='logoText'>just another aggregator.</h1>
					<img
						className={
							this.props.settingsActivated
								? 'expandCollapse activated'
								: 'expandCollapse'
						}
						id='expandCollapse'
						src={process.env.PUBLIC_URL + '/images/expand-button.svg'}
						onClick={() => this.props.toggleSettings()}
						alt='Expand Settings Menu'
					/>
				</nav>
			</header>
		);
	}
}

export default NavBar;
