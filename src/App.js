import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import blogData from './data/post_data';

const App = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	useEffect(() => {
		setBlogPosts(blogData);
	}, []);

	function getPostFromId(id) {
		return blogPosts.find((post) => post._id === id);
	}

	return (
		<BrowserRouter>
			<div>
				<h1>Blog Posts</h1>
				<Route
					exact
					path='/'
					render={(props) => <BlogPosts {...props} postData={blogPosts} />}
				/>
				<Route
					exact
					path='/posts/:id'
					render={(props) => (
						<BlogPosts {...props} post={getPostFromId(props.match.params.id)} />
					)}
				/>
			</div>
		</BrowserRouter>
	);
};

export default App;
