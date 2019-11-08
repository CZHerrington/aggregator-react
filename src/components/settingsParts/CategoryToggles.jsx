import React, { Component } from 'react';

class CategoryToggles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Music', id: 'musicToggle', activated: true },
				{ name: 'Movies', id: 'moviesToggle', activated: true },
				{ name: 'TV', id: 'tvToggle', activated: true },
				{ name: 'Books', id: 'booksToggle', activated: true },
				{ name: 'News', id: 'newsToggle', activated: true },
				{ name: 'Games', id: 'gamesToggle', activated: true }
			]
		};
	}

	toggleCategory = e => {
		e.persist(); // Otherwise the event will be reused and left null
		let catCopy = [...this.state.categories];
		let category = e.target.id.split('Toggle')[0];

		let newCategories = catCopy.map(cat => {
			if (cat.id === e.target.id) {
				cat.activated = !cat.activated;
				this.props.categoryToggled(category, cat.activated);
			}
			return cat;
		});
		// Will need to call a function passed from above to:
		//   1. Filter out the items
		//   2. Done - Toggle the category row
		this.setState({ categories: newCategories });
	};

	render() {
		return (
			<div className='categoryToggleRow activated' id='categoryToggleRow'>
				{this.state.categories.map(item => {
					let itemClass =
						'categoryToggle ' + (item.activated ? 'activated' : '');
					return (
						<div
							className={itemClass}
							id={item.id}
							key={item.name}
							onClick={e => this.toggleCategory(e)}>
							{item.name}
						</div>
					);
				})}
			</div>
		);
	}
}

export default CategoryToggles;
