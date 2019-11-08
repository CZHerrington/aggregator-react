import React, { Component } from 'react';

class MovieRowToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Action', id: 'Action', activated: true },
				{ name: 'Adventure', id: 'Adventure', activated: true },
				{ name: 'Animation', id: 'Animation', activated: true },
				{ name: 'Comedy', id: 'Comedy', activated: true },
				{ name: 'Crime', id: 'Crime', activated: true },
				{ name: 'Documentary', id: 'Documentary', activated: true },
				{ name: 'Drama', id: 'Drama', activated: true },
				{ name: 'Family', id: 'Family', activated: true },
				{ name: 'Fantasy', id: 'Fantasy', activated: true },
				{ name: 'History', id: 'History', activated: true },
				{ name: 'Horror', id: 'Horror', activated: true },
				{ name: 'Music', id: 'Music', activated: true },
				{ name: 'Mystery', id: 'Mystery', activated: true },
				{ name: 'Romance', id: 'Romance', activated: true },
				{ name: 'Sci-Fi', id: 'Sci-Fi', activated: true },
				{ name: 'TV Movie', id: 'TVMovie', activated: true },
				{ name: 'Thriller', id: 'Thriller', activated: true },
				{ name: 'War', id: 'War', activated: true },
				{ name: 'Western', id: 'Western', activated: true }
			]
		};
		// toggleSubCategory = this.toggleSubCategory.bind(this);
	}

	toggleSubCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];

		let newCategories = catCopy.map(cat => {
			if ('movieToggleRow' + cat.id === e.target.id) {
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
					id='moviesToggleHr'
				/>
				<div
					className={'genreFilterRow' + (shouldDisplay ? '' : ' hidden')}
					id='moviesToggleWrapper'>
					<span className='categoryTitleLeft'>Movies</span>
					<div className='genreToggleWrapper' id='movieToggleRow'>
						{this.state.categories.map(item => {
							let itemClass =
								'categoryToggle genreToggle ' +
								(item.activated ? 'activated' : '');
							return (
								<div
									className={itemClass}
									id={'movieToggleRow' + item.id}
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

export default MovieRowToggles;
