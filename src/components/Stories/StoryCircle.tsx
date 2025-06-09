import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import type { Story } from '../../data/stories';

interface StoryCircleProps {
  story: Story;
  isActive: boolean;
  onClick: () => void;
}

const CircleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 4px;
`;

const AvatarContainer = styled.div<{ isActive: boolean }>`
  padding: 2px;
  border-radius: 50%;
  background: ${({ isActive }) => 
    isActive 
      ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
      : '#dbdbdb'
  };
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

const Username = styled.span`
  font-size: 12px;
  color: #262626;
  max-width: 64px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const StoryCircle = ({ story, isActive, onClick }: StoryCircleProps) => {
  return (
    <CircleContainer
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AvatarContainer isActive={isActive}>
        <Avatar src={story.userAvatar} alt={story.username} />
      </AvatarContainer>
      <Username>{story.username}</Username>
    </CircleContainer>
  );
}; 