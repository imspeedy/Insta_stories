import React from 'react';
import './StoryCircle.css';

interface StoryCircleProps {
  imageUrl: string;
  username: string;
  seen: boolean;
  onClick: () => void;
}

const StoryCircle: React.FC<StoryCircleProps> = ({ imageUrl, username, seen, onClick }) => {
  return (
    <div className="story-circle-container" onClick={onClick}>
      <div className={`circle-wrapper ${seen ? 'seen' : 'unseen'}`}>
        <div className="image-container">
          <img src={imageUrl} alt={username} className="circle-image" />
        </div>
      </div>
      <span className="circle-username">{username}</span>
    </div>
  );
};

export default StoryCircle; 