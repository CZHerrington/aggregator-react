import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		// let id = this.props.data.id;
		// let key = this.props.data.key;
		let category = this.props.data.category;
		// let subcategory = this.props.data.subcategory;
		let artURL = this.props.data.artURL;
		let destURL = this.props.data.destURL;
		let title = this.props.data.title;
		let subtitle1 = this.props.data.subtitle1 || null;
		let subtitle2 = this.props.data.subtitle2 || null;

		let newsClass = '';
		if (category === 'gaming' || category === 'news') {
			newsClass = 'newsTitle';
		}

		return (
			<div className='small-card music-card'>
				<img className='album-art' src={artURL} alt='Various' />
				<div className='song-info'>
					<a href={destURL} target='_blank' className='titleLinks'>
						<h2 className={newsClass}>{title}</h2>
					</a>
					{subtitle1 && <h3>{subtitle1}</h3>}
					{subtitle2 && (
						<h3>
							<i>{subtitle2}</i>
						</h3>
					)}
				</div>
				<div className='upvoteDownvote'>
					<svg
						width='24'
						height='24'
						className='voteButton voteDown'
						xmlns='http://www.w3.org/2000/svg'
						fillRule='evenodd'
						clipRule='evenodd'>
						<path d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z' />
					</svg>
				</div>
			</div>
		);
	}
}

export default Card;
