import { useState, useEffect } from 'react';
import Card from './Card';

function Fetch() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <Card key={card.id} title={card.title} body={card.body} />
      ))}
    </div>
  );
}

export default Fetch;
