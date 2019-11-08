import React from 'react';

const LoadingAnim = props => {
	let loadingClass = props.display
		? 'loadingAnimation'
		: 'loadingAnimation hidden';

	return (
		<div className={loadingClass} id='loadingAnimation'>
			Loading...
		</div>
	);
};

export default LoadingAnim;
