import React from 'react';
import './Home.css';  // Assuming you have a separate CSS file for styling

const Home = () => {
  const posts = [
    { id: 1, title: 'Blog Post 1', description: 'This is a brief description of blog post 1.', date: '2025-01-27' },
    { id: 2, title: 'Blog Post 2', description: 'This is a brief description of blog post 2.', date: '2025-01-25' },
    { id: 3, title: 'Blog Post 3', description: 'This is a brief description of blog post 3.', date: '2025-01-20' },
    // Add more posts here
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Blog App</h1>
      </nav>
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p className="post-date">{post.date}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
