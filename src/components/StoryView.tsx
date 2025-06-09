import React, { useEffect, useState } from 'react';
import './StoryView.css';

interface Story {
  id: number;
  imageUrl: string;
  username: string;
}

interface StoryViewProps {
  story: Story;
  onClose: () => void;
  onComplete: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ story, onClose, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 10; // Update every 10ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          onClose();
          return prev;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onClose, onComplete]);

  return (
    <div className="story-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="story-header">
        <img
          src={story.imageUrl}
          alt={story.username}
          className="user-avatar"
        />
        <span className="username">{story.username}</span>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <img
        src={story.imageUrl}
        alt={story.username}
        className="story-image"
      />
    </div>
  );
};

export default StoryView; 