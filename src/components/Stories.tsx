import React, { useState } from 'react';
import StoryCircle from './StoryCircle';
import StoryView from './StoryView';
import './Stories.css';

interface Story {
  id: number;
  imageUrl: string;
  username: string;
}

interface StoriesProps {
  stories?: Story[];
}

const Stories: React.FC<StoriesProps> = ({ stories = [] }) => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [seenStories, setSeenStories] = useState<Set<number>>(new Set());

  const handleStoryClick = (storyId: number) => {
    setSelectedStory(storyId);
  };

  const handleStoryClose = () => {
    setSelectedStory(null);
  };

  const handleStoryComplete = (storyId: number) => {
    setSeenStories(prev => new Set([...prev, storyId]));
  };

  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <div className="stories-container">
      <div className="stories-scroll-container">
        {stories.map(story => (
          <StoryCircle
            key={story.id}
            imageUrl={story.imageUrl}
            username={story.username}
            seen={seenStories.has(story.id)}
            onClick={() => handleStoryClick(story.id)}
          />
        ))}
      </div>
      {selectedStory !== null && (
        <StoryView
          story={stories.find(s => s.id === selectedStory)!}
          onClose={handleStoryClose}
          onComplete={() => handleStoryComplete(selectedStory)}
        />
      )}
    </div>
  );
};

export default Stories; 