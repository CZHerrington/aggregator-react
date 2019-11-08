import React, { Component } from 'react';
import CategoryToggles from './settingsParts/CategoryToggles';
import MovieRowToggles from './settingsParts/MovieRowToggles';
import TvRowToggles from './settingsParts/TvRowToggles';
import BookRowToggles from './settingsParts/BookRowToggles';
import NewsRowToggles from './settingsParts/NewsRowToggles';
import GamingRowToggles from './settingsParts/GamingRowToggles';
import MusicRowToggles from './settingsParts/MusicRowToggles';

class SettingsOverlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaymusicRow: false,
			displaymoviesRow: true,
			displaytvRow: true,
			displaybooksRow: true,
			displaynewsRow: true,
			displaygamesRow: true
		};
	}

	categoryToggled = (category, shouldDisplay) => {
		this.setState({ ['display' + category + 'Row']: shouldDisplay });
	};

	render() {
		return (
			<div
				className={
					this.props.settingsActivated
						? 'settingsOverlay activated'
						: 'settingsOverlay'
				}
				id='settingsOverlay'>
				<CategoryToggles categoryToggled={this.categoryToggled} />
				<MovieRowToggles shouldDisplay={this.state.displaymoviesRow} />
				<TvRowToggles shouldDisplay={this.state.displaytvRow} />
				<BookRowToggles shouldDisplay={this.state.displaybooksRow} />
				<NewsRowToggles shouldDisplay={this.state.displaynewsRow} />
				<GamingRowToggles shouldDisplay={this.state.displaygamesRow} />
				<MusicRowToggles /> {/* We're never displaying the music row */}
				<hr className='settingsHr' />
			</div>
		);
	}
}

export default SettingsOverlay;
