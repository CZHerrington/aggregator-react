import React, { Component } from 'react';
import FullPageBg from './components/FullPageBg';
import LoadingAnim from './components/LoadingAnim';
import NavBar from './components/NavBar';
import SettingsOverlay from './components/SettingsOverlay';
import CardContainer from './components/CardContainer';
// import './App.css';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settingsActivated: false,
			displayLoadingAnim: true
			// fullArray: [],
			// filteredArray: []
		};
	}

	toggleSettings = () => {
		this.setState({ settingsActivated: !this.state.settingsActivated });
	};

	cardsFinishedLoading = () => {
		this.setState({ displayLoadingAnim: !this.state.displayLoadingAnim });
	};

	render() {
		let activated = this.state.settingsActivated;

		return (
			<div className='App'>
				<FullPageBg />
				<LoadingAnim display={this.state.displayLoadingAnim} />
				<NavBar
					settingsActivated={activated}
					toggleSettings={this.toggleSettings}
				/>
				<SettingsOverlay settingsActivated={activated} />
				<CardContainer
					settingsActivated={activated}
					cardsFinishedLoading={this.cardsFinishedLoading}
				/>
			</div>
		);
	}
}

export default App;
