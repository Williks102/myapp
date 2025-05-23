import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function EventDetails() {
  const navigate = useNavigate();

  const event = {
    name: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    price: "10000 FCFA",
    description: "Un événement musical exceptionnel avec des artistes de renom. Venez vivre une expérience unique !",
    image: null,
  };

  const handleBuy = () => {
    // Tu peux ajouter ici la logique d'ajout au panier si besoin
    navigate("/checkout"); // ou "/cart" selon ton flow
  };

  return (
    <div className="event-details-container">
      <div className="event-details-card">
        <div className="event-details-image">
          {event.image ? (
            <img src={event.image} alt={event.name} />
          ) : (
            <span className="no-image">Image non disponible</span>
          )}
        </div>
        <h2 className="event-details-title">{event.name}</h2>
        <div className="event-details-meta">
          <span>📅 {event.date}</span>
          <span>📍 {event.location}</span>
        </div>
        <div className="event-details-desc">{event.description}</div>
        <div className="event-details-footer">
          <span className="event-price">{event.price}</span>
          <button className="pay-btn" onClick={handleBuy}>Acheter</button>
        </div>
      </div>
    </div>
  );
}