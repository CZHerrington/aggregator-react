import React, { Component } from 'react';

class TvRowToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Action', id: 'Action', activated: true },
				{ name: 'Animation', id: 'Animation', activated: true },
				{ name: 'Comedy', id: 'Comedy', activated: true },
				{ name: 'Crime', id: 'Crime', activated: true },
				{ name: 'Documentary', id: 'Documentary', activated: true },
				{ name: 'Drama', id: 'Drama', activated: true },
				{ name: 'Family', id: 'Family', activated: true },
				{ name: 'Kids', id: 'Kids', activated: true },
				{ name: 'Mystery', id: 'Mystery', activated: true },
				{ name: 'News', id: 'News', activated: true },
				{ name: 'Reality', id: 'Reality', activated: true },
				{ name: 'Spec. Fiction', id: 'Sci-Fi', activated: true },
				{ name: 'Soap', id: 'Soap', activated: true },
				{ name: 'Talk', id: 'Talk', activated: true },
				{ name: 'War & Politics', id: 'War', activated: true },
				{ name: 'Western', id: 'Western', activated: true }
			]
		};
	}

	toggleSubCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];

		let newCategories = catCopy.map(cat => {
			if ('tvToggleRow' + cat.id === e.target.id) {
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
					id='tvToggleHr'
				/>
				<div
					className={'genreFilterRow' + (shouldDisplay ? '' : ' hidden')}
					id='tvToggleWrapper'>
					<span className='categoryTitleRight'>
						&nbsp;&nbsp;&nbsp;TV&nbsp;&nbsp;&nbsp;
					</span>
					<div className='genreToggleWrapper' id='tvToggleRow'>
						{this.state.categories.map(item => {
							let itemClass =
								'categoryToggle genreToggle ' +
								(item.activated ? 'activated' : '');
							return (
								<div
									className={itemClass}
									id={'tvToggleRow' + item.id}
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

export default TvRowToggles;
