import React, { Component } from 'react';

class GamingRowToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'IGN', id: 'IGN', activated: true },
				{ name: 'Polygon', id: 'Polygon', activated: true }
			]
		};
		// toggleSubCategory = this.toggleSubCategory.bind(this);
	}

	toggleSubCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];

		let newCategories = catCopy.map(cat => {
			if ('gamingToggleRow' + cat.id === e.target.id) {
				cat.activated = !cat.activated;
			}
			return cat;
		});
		// Will need to call a function passed from above to:
		//   1. Filter out the items
		//   2. Toggle the category row
		this.setState({ categories: newCategories });
	};

	render() {
		let shouldDisplay = this.props.shouldDisplay;

		return (
			<>
				<hr
					className={'settingsHr' + (shouldDisplay ? '' : ' hidden')}
					id='gamingToggleHr'
				/>
				<div
					className={'genreFilterRow' + (shouldDisplay ? '' : ' hidden')}
					id='gamingToggleWrapper'>
					<span className='categoryTitleLeft'>Games</span>
					<div className='genreToggleWrapper' id='gamingToggleRow'>
						{this.state.categories.map(item => {
							let itemClass =
								'categoryToggle genreToggle ' +
								(item.activated ? 'activated' : '');
							return (
								<div
									className={itemClass}
									id={'gamingToggleRow' + item.id}
									key={item.name}
									onClick={e => this.toggleSubCategory(e)}>
									{item.name}
								</div>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}

export default GamingRowToggles;
