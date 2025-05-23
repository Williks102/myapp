import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const initialCart = [
  {
    id: 1,
    name: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    price: 10000,
    quantity: 2,
  },
  {
    id: 2,
    name: "Festival Jazz",
    date: "2025-06-10 20:00",
    location: "Palais de la Culture",
    price: 8000,
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleQuantity = (id, qty) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const handleRemove = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="main-content">
      <h2>Mon panier</h2>
      {cart.length === 0 ? (
        <div className="no-events">Votre panier est vide.</div>
      ) : (
        <div className="cart-list">
          {cart.map(item => (
            <div className="cart-card" key={item.id}>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <div className="event-meta">
                  <span>📅 {item.date}</span>
                  <span>📍 {item.location}</span>
                </div>
                <div className="cart-actions">
                  <label>
                    Quantité :
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e =>
                        handleQuantity(item.id, Number(e.target.value))
                      }
                      style={{ width: 50, marginLeft: 8 }}
                    />
                  </label>
                  <button
                    className="pay-btn"
                    style={{ marginLeft: 12, background: "#eee", color: "#d32f2f" }}
                    onClick={() => handleRemove(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
                <div className="event-footer">
                  <span className="event-price">
                    {item.price * item.quantity} FCFA
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total" style={{ marginTop: 18 }}>
            Total à payer : <b>{total} FCFA</b>
          </div>
          <Link to="/checkout">
            <button className="pay-btn" style={{ marginTop: 18, width: "100%" }}>
              Passer au paiement
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}