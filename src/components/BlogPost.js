import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
	if (!post) return <p>NO POST FOUND!</p>;

	const linkStyles = {
		textDecoration: 'none',
		color: 'black'
	};

	const { title, modified_date, category, content } = post;
	return (
		<div>
			<Link style={linkStyles} to={`/posts/${post.id}`}>
				<h2>{title}</h2>
			</Link>
			<p>{modified_date.toLocaleString()}</p>
			<p>{category}</p>
			<p>{content}</p>
		</div>
	);
};

export default BlogPost;
