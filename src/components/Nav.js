import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	const divStyles = {
		display: 'flex'
	};

	const linkStyles = {
		textDecoration: 'none',
		color: 'black'
	};
	return (
		<div style={divStyles}>
			<Link to='/'>Home</Link>
			<Link to='/posts/new'>Add New Post</Link>
		</div>
	);
};

export default Nav;
