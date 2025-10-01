import React, { useState, useEffect } from 'react';

function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/storage/blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        alert('Subscribed successfully!');
        setEmail('');
      } else {
        alert('Subscription failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Subscription failed.');
    }
  };

  return (
    <section id="blogs">
      <h2>My Blogs</h2>
      <div className="blog-search">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="blogs-list">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blog">
            <h3><a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.title}</a></h3>
            <p>{blog.content}</p>
            <div className="tags">
              {blog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="subscribe">
        <h3>Subscribe to Newsletter</h3>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Blogs;
