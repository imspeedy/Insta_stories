import { useState, useEffect, useCallback } from 'react';
import type { Story } from '../data/stories';

interface UseStoriesProps {
  stories: Story[];
  autoPlayInterval?: number;
}

export const useStories = ({ stories, autoPlayInterval = 5000 }: UseStoriesProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToNextStory = useCallback(() => {
    setCurrentStoryIndex((prevIndex) => 
      prevIndex < stories.length - 1 ? prevIndex + 1 : prevIndex
    );
  }, [stories.length]);

  const goToPreviousStory = useCallback(() => {
    setCurrentStoryIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  }, []);

  const goToStory = useCallback((index: number) => {
    setCurrentStoryIndex(index);
    setIsPlaying(true);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isPlaying) {
      timer = setTimeout(() => {
        if (currentStoryIndex < stories.length - 1) {
          goToNextStory();
        } else {
          setIsPlaying(false);
        }
      }, autoPlayInterval);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentStoryIndex, isPlaying, stories.length, autoPlayInterval, goToNextStory]);

  return {
    currentStoryIndex,
    currentStory: stories[currentStoryIndex],
    isPlaying,
    goToNextStory,
    goToPreviousStory,
    goToStory,
    togglePlayPause,
  };
}; 