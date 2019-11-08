import React, { Component } from 'react';
import Card from './Card';
import SettingsCard from './SettingsCard';
import updateAllCards from '../scripts/fetchCardData';

class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullCardArray: [],
			filteredCardArray: []
		};
	}

	async generateCards() {
		let newCardArray = await updateAllCards();

		// Would do an initial filter of the array here

		// Disables the loading animation
		this.props.cardsFinishedLoading();

		this.setState({
			fullCardArray: newCardArray,
			filteredCardArray: newCardArray
		});
	}

	// Need a function to trigger a refiltering of data

	// Need a function that actually refilters the data

	componentDidMount() {
		this.generateCards();
	}

	render() {
		return (
			<main
				id='mainContent'
				className={this.props.settingsActivated ? 'hidden' : ''}>
				<SettingsCard />

				{/* Loop through all the cards */}
				{this.state.filteredCardArray.map((card, i) => {
					return <Card data={card} key={i + '' + card.destURL} />;
				})}
			</main>
		);
	}
}

export default CardContainer;
