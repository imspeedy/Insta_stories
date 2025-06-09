export interface Story {
  id: string;
  imageUrl: string;
  username: string;
  userAvatar: string;
  timestamp: string;
}

export const stories: Story[] = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/id/237/400/800',
    username: 'john_doe',
    userAvatar: 'https://picsum.photos/id/64/100/100',
    timestamp: '2h ago'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/id/238/400/800',
    username: 'jane_smith',
    userAvatar: 'https://picsum.photos/id/65/100/100',
    timestamp: '3h ago'
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/id/239/400/800',
    username: 'mike_wilson',
    userAvatar: 'https://picsum.photos/id/66/100/100',
    timestamp: '5h ago'
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/id/240/400/800',
    username: 'sarah_parker',
    userAvatar: 'https://picsum.photos/id/67/100/100',
    timestamp: '6h ago'
  },
  {
    id: '5',
    imageUrl: 'https://picsum.photos/id/241/400/800',
    username: 'alex_brown',
    userAvatar: 'https://picsum.photos/id/68/100/100',
    timestamp: '8h ago'
  }
]; 