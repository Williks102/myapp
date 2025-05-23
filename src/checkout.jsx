import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const price = 10000;
  const eventName = "J HAINE";
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("card");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login");
  }, []);

  const total = price * quantity;

  const isFormValid = fullname && email && quantity > 0;

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/aftercheckout");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Paiement</h2>
        <div className="cart-summary">
          <h3>Votre panier</h3>
          <ul>
            <li>
              {eventName} ×{" "}
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                style={{ width: 50, margin: "0 8px" }}
              />
              — <b>{total} FCFA</b>
            </li>
          </ul>
          <div className="cart-total">
            Total à payer : <span>{total} FCFA</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nom complet</label>
          <input
            type="text"
            className="login-input"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            placeholder="Votre nom"
            required
          />
          <label>Email</label>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            required
          />
          <label>Moyen de paiement</label>
          <select
            className="login-input"
            value={payment}
            onChange={e => setPayment(e.target.value)}
          >
            <option value="card">Carte bancaire</option>
            <option value="mobile">Mobile Money</option>
          </select>
          <button className="login-submit" type="submit">
            Payer
          </button>
        </form>
      </div>
    </div>
  );
}