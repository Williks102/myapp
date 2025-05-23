import React, { useState } from "react";
import "./App.css";

const EVENTS = [
  {
    id: 1,
    name: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    price: "10000 FCFA",
    image: null,
    category: "Concert",
  },
  {
    id: 2,
    name: "Festival Jazz",
    date: "2025-06-10 20:00",
    location: "Palais de la Culture",
    price: "8000 FCFA",
    image: null,
    category: "Spectacle",
  },
  {
    id: 3,
    name: "Brunch Party",
    date: "2025-07-05 11:00",
    location: "Cocody Café",
    price: "5000 FCFA",
    image: null,
    category: "Brunch",
  },
];

const CATEGORIES = ["Tous", ...Array.from(new Set(EVENTS.map(e => e.category)))];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filteredEvents = EVENTS.filter(event => {
    const matchCategory = category === "Tous" || event.category === category;
    const matchSearch = event.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🎫</span>
          <span className="logo-text">PASS<span style={{color:"#fff"}}>PRO</span></span>
        </div>
        <button className="connect-btn">Connexion</button>
      </header>
      <div className="hero">
        <h1>Leader de la billetterie en Afrique de l'ouest</h1>
        <p>Découvrez et réservez les meilleurs événements en Côte d'Ivoire</p>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Rechercher un événement…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-bar"
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`category-btn${category === cat ? " active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <main className="main-content">
        {filteredEvents.length === 0 ? (
          <div className="no-events">Aucun événement trouvé.</div>
        ) : (
          <div className="event-list">
            {filteredEvents.map(event => (
              <div className="event-card" key={event.id}>
                <div className="event-image">
                  {event.image ? (
                    <img src={event.image} alt={event.name} />
                  ) : (
                    <span className="no-image">Image non disponible</span>
                  )}
                </div>
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <div className="event-meta">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="event-footer">
                    <span className="event-price">{event.price}</span>
                    <button className="pay-btn">Payer</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}