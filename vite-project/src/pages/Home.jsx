import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState(() => {
    return JSON.parse(localStorage.getItem("basket")) || [];
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);

  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let existing = basket.find(x => x.id === item.id);
    alert("Məhsul səbətə əlavə edildi");

    if (existing) {
      existing.count += 1;
    } else {
      basket = [...basket, { ...item, count: 1 }];
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    setBasket(basket);
  };

  const wishlist = (item) => {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let existingProduct = wish.find(x => x.id === item.id);

    if (existingProduct) {
      alert("Məhsul artıq əlavə edilib");
    } else {
      wish = [...wish, item];
      localStorage.setItem('wish', JSON.stringify(wish));
    }
  };

  const deleteItem = (item) => {
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
      <h2 style={{ textAlign: 'center' }}>Məhsullar</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        background:'white'
      }}>
        {data.map(item => (
          <div key={item.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            width: '200px',
            textAlign: 'center',
            color:'black'
          }}>
            <img src={item.image} alt={item.title} style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              marginBottom: '10px'
            }} />
            <h3 style={{ fontSize: '16px', minHeight: '50px' }}>{item.title}</h3>
            <p style={{ fontWeight: 'bold' }}>${item.price}</p>
            <button onClick={() => addToBasket(item)} style={{
              backgroundColor: '#0f9d58',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              marginBottom: '5px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Səbətə əlavə et
            </button>
            <br />
            <button onClick={() => wishlist(item)} style={{
              backgroundColor: '#f4b400',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '5px'
            }}>
              Wish əlavə et
            </button>
            <button onClick={() => deleteItem(item)} style={{
              backgroundColor: '#db4437',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
