import React, { useState, useEffect } from 'react';

function Content() {
  const [videos, setVideos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contact, setContact] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  useEffect(() => {
    fetch('/storage/videos.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));

    fetch('/storage/blogs.json')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setFilteredBlogs(data);
      })
      .catch(error => console.error('Error fetching blogs:', error));

    fetch('/storage/contact.json')
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact:', error));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const interval = setInterval(() => {
        setCurrentVideoIndex(prevIndex => (prevIndex + 1) % (videos.length - 2));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [videos]);

  useEffect(() => {
    if (blogs.length > 0) {
      const interval = setInterval(() => {
        setCurrentBlogIndex(prevIndex => (prevIndex + 1) % blogs.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [blogs]);

  useEffect(() => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  const visibleVideos = videos.slice(currentVideoIndex, currentVideoIndex + 3);
  const currentBlog = filteredBlogs[currentBlogIndex];

  return (
    <section id="content">
      <h2>Content</h2>

      <div className="content-section">
        <h3>YouTube Videos</h3>
        <div className="videos-carousel">
          <div className="videos-container">
            {visibleVideos.map(video => (
              <div key={video.id} className="video-card">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.thumbnail} alt={video.title} />
                  <h4>{video.title}</h4>
                </a>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {Array.from({ length: videos.length - 2 }, (_, i) => (
              <span
                key={i}
                className={i === currentVideoIndex ? 'active' : ''}
                onClick={() => setCurrentVideoIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section">
        <h3>Blog Articles</h3>
        <div className="blog-search">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="blog-carousel">
          {currentBlog && (
            <div className="blog-card" onClick={() => window.open(contact.blogsUrl, '_blank')} style={{cursor: 'pointer'}}>
              <h4>{currentBlog.title}</h4>
              <p className="blog-date">{currentBlog.date}</p>
              <p className="blog-excerpt">{currentBlog.content.substring(0, 200)}...</p>
              <div className="blog-tags">
                {currentBlog.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <p className="click-to-read">Click to read full article</p>
            </div>
          )}
          <div className="carousel-indicators">
            {filteredBlogs.map((_, i) => (
              <span
                key={i}
                className={i === currentBlogIndex ? 'active' : ''}
                onClick={() => setCurrentBlogIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
