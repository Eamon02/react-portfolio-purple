import React from 'react';
import KVP from '../../assets/Kingsview-Partners-Logo-RGB_Final.png'
import KSW from '../../assets/KSW_BRAND_OFFICIAL_WHITE.png'
import FUNDR from '../../assets/fundr-trading-logo-thin.png'

function Projects() {
	return (
		<div id='projects' className='projects'>
			<h1 className='image--text--2'>Projects</h1>
			<div className='projects--blocks'>
				<div className='block'>
					<img src={KVP} alt='' />
				</div>
				<div className='block'>
					<img src={KSW} alt='' />
				</div>
				<div className='block'>
					<img src={FUNDR} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Projects;
