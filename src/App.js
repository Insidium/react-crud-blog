import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import blogData from './data/post_data';
import BlogPost from './components/BlogPost';
import Nav from './components/Nav';

const App = () => {
	const [blogPosts, setBlogposts] = useState([]);

	useEffect(() => {
		setBlogposts(blogData);
	}, []);

	function getPostFromId(id) {
		//console.log(blogPosts)
		return blogPosts.find((post) => post._id == id);
	}

	return (
		<div>
			<BrowserRouter>
				<Nav />
				<h1>Blogs</h1>
				<Route
					exact
					path='/'
					render={(props) => <BlogPosts {...props} postData={blogPosts} />}
				/>
				<Route
					exact
					path='/posts/:id'
					render={(props) => (
						<BlogPost {...props} post={getPostFromId(props.match.params.id)} />
					)}
				/>
			</BrowserRouter>
		</div>
	);
};

export default App;
