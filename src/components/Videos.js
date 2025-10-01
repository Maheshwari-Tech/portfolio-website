import React, { useState, useEffect } from 'react';

function Videos() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/storage/videos.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % (videos.length - 2));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [videos]);

  const visibleVideos = videos.slice(currentIndex, currentIndex + 3);

  return (
    <section id="videos">
      <h2>My YouTube Videos</h2>
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
              className={i === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;
