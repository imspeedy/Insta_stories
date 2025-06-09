import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import type { Story } from '../../data/stories';

interface StoryViewProps {
  story: Story;
  progress: number;
  isPlaying: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
}

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  z-index: 2;
`;

const HeaderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Timestamp = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
`;

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: white;
  transform-origin: left;
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

const NavigationButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StoryView = ({
  story,
  progress,
  isPlaying,
  onClose,
  onPrevious,
  onNext,
  onTogglePlay,
}: StoryViewProps) => {
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ProgressContainer>
          <ProgressBar
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress }}
            transition={{ duration: 0.1 }}
          />
        </ProgressContainer>
        
        <Header>
          <HeaderAvatar src={story.userAvatar} alt={story.username} />
          <HeaderInfo>
            <Username>{story.username}</Username>
            <Timestamp>{story.timestamp}</Timestamp>
          </HeaderInfo>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>

        <StoryImage src={story.imageUrl} alt="" onClick={onTogglePlay} />

        <NavigationOverlay>
          <NavigationButton onClick={onPrevious} />
          <NavigationButton onClick={onNext} />
        </NavigationOverlay>
      </Container>
    </AnimatePresence>
  );
}; 