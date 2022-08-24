import React from 'react';
import aboutImage from '../../assets/headshot-bw.png';

function About() {
	return (
		<div className='about' id='about'>
			<div className='about--wrapper'>
				<div className='about--image'>
					<img src={aboutImage} alt='' />
					<div className='headshot--border'></div>
				</div>
				<div className='about--content container'>
					<h3>Hi I'm</h3>
					<div className='about--content--name'>
						<h1 className='image--text--2'>Eamon McHugh</h1>
						<h3 className='image--text--2'>MBA</h3>
					</div>
					<div className='about--content--info'>
						<p>Greenwich, CT</p>
						<p>203-249-5871</p>
						<p>eamonmchugh2@gmail.com</p>
					</div>
					<p className='about--statment'>
						I am a Front End Developer based in Connecticut,
						who’s passionate about designing beautiful web
						pages with accessible user experiences. I love to
						push my skills to the limit and learn new things.
					</p>
					<h2 className='about--subhead'>Technical Skills</h2>
					<p className='about--skills'>
						HTML5, CSS3, SCSS, JavaScript, React, Unbounce,
						Clickfunnels, Wordpress, JQuery, Node.js, Node
						Package Manager, Webpack, MySQL, MongoDB, APIs,
						JSON, AJAX, GitHub, Bootstrap, Materialize, Git,
						Redux, Google Analytics, Google Analytics 4,
						Google Tagmanager, Hotjar, Adobe Lightroom and
						Photoshop, Figma, Lighthouse
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
