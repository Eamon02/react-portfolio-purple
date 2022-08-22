import React from 'react';

function Contact() {
	return (
		<div id='contact'>
			<div className='contact'>
				<h1 className='image--text--2'>CONTACT</h1>
				<div className='contact--info'>
					<a
						href='https://github.com/Eamon02'
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>Github</h2>
					</a>
					<a
						href='https://www.linkedin.com/in/eamon-mchugh/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>Linkedin</h2>
					</a>
					<div
						className='link'
						onClick={() =>
							(window.location =
								'mailto:eamonmchugh2@gmail')
						}
					>
						<h3>eamonmchugh2@gmail.com</h3>
					</div>
					<a href='tel:2032495871'>
						<h3>203-249-5871</h3>
					</a>
				</div>
			</div>
			<div className='footer'>
				<div className='border--bottom'></div>
				<p>© 2022</p>
			</div>
		</div>
	);
}

export default Contact;
