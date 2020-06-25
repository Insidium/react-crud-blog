import React from 'react';

const BlogPost = ({ post }) => {
	const { title, modified_date, category, content } = post;
	return (
		<div>
			<h2>{title}</h2>
			<p>{modified_date.toLocaleString()}</p>
			<p>{category}</p>
			<p>{content}</p>
		</div>
	);
};

export default BlogPost;
