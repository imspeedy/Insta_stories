import { useState } from 'react';
import styled from '@emotion/styled';
import { stories } from '../../data/stories';
import { useStories } from '../../hooks/useStories';
import { StoryCircle } from './StoryCircle';
import { StoryView } from './StoryView';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;

const StoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding: 8px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Stories = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const {
    currentStoryIndex,
    currentStory,
    isPlaying,
    goToNextStory,
    goToPreviousStory,
    goToStory,
    togglePlayPause,
  } = useStories({ stories });

  const handleStoryClick = (index: number) => {
    goToStory(index);
    setIsViewerOpen(true);
  };

  const handleClose = () => {
    setIsViewerOpen(false);
  };

  return (
    <Container>
      <StoriesContainer>
        {stories.map((story, index) => (
          <StoryCircle
            key={story.id}
            story={story}
            isActive={index === currentStoryIndex}
            onClick={() => handleStoryClick(index)}
          />
        ))}
      </StoriesContainer>

      {isViewerOpen && (
        <StoryView
          story={currentStory}
          progress={isPlaying ? 1 : 0}
          isPlaying={isPlaying}
          onClose={handleClose}
          onPrevious={goToPreviousStory}
          onNext={goToNextStory}
          onTogglePlay={togglePlayPause}
        />
      )}
    </Container>
  );
}; 