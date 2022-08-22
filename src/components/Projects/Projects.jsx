import React from 'react';
import KVP from '../../assets/Kingsview-Partners-Logo-RGB_Final.png';
import KSW from '../../assets/KSW_BRAND_OFFICIAL_WHITE-BLUE.png';
import FUNDR from '../../assets/funder-trading-06.png';

function Projects() {
	return (
		<div id='projects' className='projects'>
			<h1 className='image--text--2'>PROJECTS</h1>
			<div className='projects--blocks'>
				<div className='block'>
					<a
						href='https://partnerwithkingsview.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={KVP} alt='' />
					</a>
				</div>
				<div className='block'>
					<a
						href='https://fundertrading.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={FUNDR} alt='' />
					</a>
				</div>
				<div className='block'>
					<a
						href='https://knightstrategic.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={KSW} alt='' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
