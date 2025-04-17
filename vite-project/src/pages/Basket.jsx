import React, { useEffect, useState } from 'react';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  const increase = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let existing = basket.find(x => x.id === item.id);
    
    if (existing) {
      existing.count += 1;
    } else {
      basket = [...basket, { ...item, count: 1 }];
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    setBasket(basket);
  };
  

  const remove = (item) => {
      let basket = JSON.parse(localStorage.getItem("basket")) || [];
      let existing = basket.find(x => x.id === item.id);
  
      if (existing) {
        if (existing.count > 1) {
          existing.count -= 1; 
        } else {
          basket = basket.filter(x => x.id !== item.id); 
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        setBasket(basket);
      }
    };
    
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Səbət</h2>
      {basket.map(item => (
        <div key={item.id} style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9'
        }}>
          <img src={item.image} alt={item.title} style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain',
            marginBottom: '10px'
          }} />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Count: {item.count}</p>
          <button onClick={() => increase(item)}>Artır</button>
          <button onClick={() => remove(item)}>Sil</button>
        </div>
      ))}
    </div>
  );

}
export default Basket;
