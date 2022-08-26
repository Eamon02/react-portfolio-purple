import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// SCO
import { Helmet } from 'react-helmet';

function App() {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Eamon McHugh's Portfolio</title>
				<meta
					name='description'
					content="Eamon McHugh's Portfolio"
				/>
				<link
					rel='icon'
					type='image/png'
					href='../public/favicon.ico'
					sizes='16x16'
				/>
			</Helmet>
			<Header />
			<About />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
