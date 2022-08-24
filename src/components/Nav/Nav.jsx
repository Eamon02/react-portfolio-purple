import React from 'react';
import { useState, useRef } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';

function Nav() {
	const [activeNav, setActiveNav] = useState('#header');

	const navRef = useRef();

	const showNav = () => {
		navRef.current.classList.toggle('responsive--nav');
	};

	const hideNav = () => {
		navRef.current.classList.remove('responsive--nav');
	};

	return (
		<nav className='nav'>
			<div className='nav--desktop'>
				<div className='nav--header container'>
					<div className='nav--title'>
						<a
							href='#header'
							onClick={() => setActiveNav('#header')}
							className={
								activeNav === '#header' ? 'active' : ''
							}
						>
							EAMON MCHUGH
						</a>
					</div>
					<ul className='nav--links' ref={navRef}>
						<div
							onClick={showNav}
							className='nav--btn nav--btn--close'
						>
							<RiCloseFill />
						</div>
						<li onClick={hideNav}>
							<a
								href='#header'
								onClick={() => setActiveNav('#header')}
								className={
									activeNav === '#header'
										? 'active'
										: ''
								}
							>
								HOME
							</a>
						</li>
						<li onClick={hideNav}>
							<a
								href='#about'
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === '#about'
										? 'active'
										: ''
								}
							>
								ABOUT
							</a>
						</li>
						<li onClick={hideNav}>
							<a
								href='#projects'
								onClick={() =>
									setActiveNav('#projects')
								}
								className={
									activeNav === '#projects'
										? 'active'
										: ''
								}
							>
								PROJECTS
							</a>
						</li>
						<li onClick={hideNav}>
							<a
								href={require('../../assets/Eamon McHugh Resume 2022.pdf')}
								target='_blank'
								rel='noopener noreferrer'
							>
								RESUME
							</a>
						</li>
						<li onClick={hideNav} className='contact--mobile'>
							<a href='#contact'>CONTACT</a>
						</li>
					</ul>
					<div onClick={showNav} className='nav--btn'>
						<BiMenuAltRight />
					</div>
				</div>
				<div className='nav--side'>
					<a href='#contact' className='contact--btn'>
						CONTACT
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
