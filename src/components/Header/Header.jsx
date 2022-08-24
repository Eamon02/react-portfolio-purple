import React from 'react';
import Nav from '../Nav/Nav';

function Header() {
	// window.addEventListener('scroll', function () {
	// 	let text = document.getElementById('text--header');
	// 	let scroll = window.scrollY;

	// 	text.style.top = scroll * .5 + '%';
	// });

	return (
		<section id='header'>
			<Nav />
			<div className='header--hero container'>
				<div className='header--hero--image'>
					{/* <img
						id='image--header'
						src={require('../../assets/purple.jpg')}
						alt=''
					/> */}
				</div>
				<h1 id='text--header'> Design. Explore. Create.</h1>
			</div>
		</section>
	);
}

export default Header;
