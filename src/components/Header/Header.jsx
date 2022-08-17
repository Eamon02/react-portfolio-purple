import React from 'react';
import Nav from '../Nav/Nav';
// import {PurpleWaves} from '../../assets/purple.jpg'

function Header() {
	return (
		<section id='header'>
			<Nav />
			<div className='header--hero container'>
				<div className='header--hero--image'>
					<img src={require('../../assets/purple.jpg')} alt='' />
				</div>
				<h1> Design. Explore. Create.</h1>
			</div>
		</section>
	);
}

export default Header;
