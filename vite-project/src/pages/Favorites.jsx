import React, { useEffect, useState } from 'react';

const Favorites = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wish")) || [];
    setWish(stored);
  }, []);

  const remove = (id) => {
    const updated = wish.filter(item => item.id !== id);
    localStorage.setItem("wish", JSON.stringify(updated));
    setWish(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Favorilər</h2>
      {wish.map(item => (
        <div key={item.id} style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ccc'
        }}>
          <img src={item.image} alt={item.title} style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain',
            marginBottom: '10px'
          }} />
          <h3>{item.title}</h3>
          <button onClick={() => remove(item.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
