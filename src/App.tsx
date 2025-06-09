import Stories from './components/Stories';
import Header from './components/Header';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Instagram+Sans:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Instagram Sans', sans-serif;
    background-color: #fafafa;
  }
`;

const mockStories = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/200/200?random=1',
    username: 'travel_lover'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200/200?random=2',
    username: 'foodie_adventures'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/200/200?random=3',
    username: 'fitness_guru'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/200/200?random=4',
    username: 'art_gallery'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/200/200?random=5',
    username: 'tech_news'
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/200/200?random=6',
    username: 'music_vibes'
  },
  {
    id: 7,
    imageUrl: 'https://picsum.photos/200/200?random=7',
    username: 'nature_clicks'
  },
  {
    id: 8,
    imageUrl: 'https://picsum.photos/200/200?random=8',
    username: 'pet_paradise'
  },
  {
    id: 9,
    imageUrl: 'https://picsum.photos/200/200?random=9',
    username: 'fashion_trends'
  },
  {
    id: 10,
    imageUrl: 'https://picsum.photos/200/200?random=10',
    username: 'daily_motivation'
  }
];

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Stories stories={mockStories} />
    </>
  );
}

export default App;
