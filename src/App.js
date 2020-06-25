import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import blogData from './data/post_data';

const App = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	useEffect(() => {
		setBlogPosts(blogData);
	}, []);
	return (
		<BrowserRouter>
			<div>
				<h1>Blog Posts</h1>
				<Route
					exact
					path='/'
					render={(props) => <BlogPosts {...props} postData={blogPosts} />}
				></Route>
			</div>
		</BrowserRouter>
	);
};

export default App;
