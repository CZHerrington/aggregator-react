import React, { Component } from 'react';

class NewsRowToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Arts', id: 'Arts', activated: true },
				{ name: 'Business', id: 'Business', activated: true },
				{ name: 'Climate', id: 'Climate', activated: true },
				{ name: 'Health', id: 'Health', activated: true },
				{ name: 'Living', id: 'Living', activated: true },
				{ name: 'Movies', id: 'Movies', activated: true },
				{ name: 'New York', id: 'NewYork', activated: true },
				{ name: 'Opinion', id: 'Opinion', activated: true },
				{ name: 'Style', id: 'Style', activated: true },
				{ name: 'Technology', id: 'Technology', activated: true },
				{ name: 'The Upshot', id: 'TheUpshot', activated: true },
				{ name: 'Travel', id: 'Travel', activated: true },
				{ name: 'U.S.', id: 'US', activated: true },
				{ name: 'World', id: 'World', activated: true }
			]
		};
	}

	toggleSubCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];

		let newCategories = catCopy.map(cat => {
			if ('newsToggleRow' + cat.id === e.target.id) {
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
					id='newsToggleHr'
				/>
				<div
					className={'genreFilterRow' + (shouldDisplay ? '' : ' hidden')}
					id='newsToggleWrapper'>
					<span className='categoryTitleRight'>News</span>
					<div className='genreToggleWrapper' id='newsToggleRow'>
						{this.state.categories.map(item => {
							let itemClass =
								'categoryToggle genreToggle ' +
								(item.activated ? 'activated' : '');
							return (
								<div
									className={itemClass}
									id={'newsToggleRow' + item.id}
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

export default NewsRowToggles;
