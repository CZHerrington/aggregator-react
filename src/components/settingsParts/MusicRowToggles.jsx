import React, { Component } from 'react';

class MusicRowToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Placeholder', id: 'Placeholder', activated: true },
				{ name: 'Placeholder2', id: 'Placeholder2', activated: true }
			]
		};
		// toggleSubCategory = this.toggleSubCategory.bind(this);
	}

	toggleSubCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];

		let newCategories = catCopy.map(cat => {
			if ('musicToggleRow' + cat.id === e.target.id) {
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
					id='musicToggleHr'
				/>
				<div
					className={'genreFilterRow' + (shouldDisplay ? '' : ' hidden')}
					id='musicToggleWrapper'>
					<span className='categoryTitleLeft'>Music</span>
					<div className='genreToggleWrapper' id='musicToggleRow'>
						{this.state.categories.map(item => {
							let itemClass =
								'categoryToggle genreToggle ' +
								(item.activated ? 'activated' : '');
							return (
								<div
									className={itemClass}
									id={'mmusicToggleRow' + item.id}
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

export default MusicRowToggles;
