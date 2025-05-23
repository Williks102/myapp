import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const events = [
  {
    id: 1,
    name: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    price: "10000 FCFA",
    category: "Concert",
  },
  {
    id: 2,
    name: "Festival Jazz",
    date: "2025-06-10 20:00",
    location: "Palais de la Culture",
    price: "8000 FCFA",
    category: "Spectacle",
  },
  {
    id: 3,
    name: "Brunch Party",
    date: "2025-07-05 11:00",
    location: "Cocody Café",
    price: "5000 FCFA",
    category: "Brunch",
  },
];

const categories = ["Tous", ...Array.from(new Set(events.map(e => e.category)))];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filteredEvents = events.filter(event => {
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
        <Link to="/login">
          <button className="connect-btn">Connexion</button>
        </Link>
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
          {categories.map(cat => (
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
        <div className="event-list">
          {filteredEvents.length === 0 ? (
            <div className="no-events">Aucun événement trouvé.</div>
          ) : (
            filteredEvents.map(event => (
              <div className="event-card" key={event.id}>
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <div className="event-meta">
                    <span>📅 {event.date}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="event-footer">
                    <span className="event-price">{event.price}</span>
                    <Link to={`/event/${event.id}`}>
                      <button className="pay-btn">Voir</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Section organisateur */}
        <section className="promoter-section">
          <h3>Vous organisez des événements ?</h3>
          <p>
            Rejoignez PassPro Business et bénéficiez d'une solution complète pour la gestion de vos événements
          </p>
          <div className="promoter-features">
            <div>
              <div className="promoter-icon">📅</div>
              <b>Gestion simplifiée</b>
              <div>Gérez vos événements et vos billets en quelques clics</div>
            </div>
            <div>
              <div className="promoter-icon">👥</div>
              <b>Large audience</b>
              <div>Touchez des milliers de participants potentiels</div>
            </div>
            <div>
              <div className="promoter-icon">📈</div>
              <b>Analyses détaillées</b>
              <div>Suivez vos ventes en temps réel</div>
            </div>
          </div>
          <Link to="/register">
            <button className="promoter-btn">Devenir promoteur →</button>
          </Link>
        </section>

        {/* Section pourquoi choisir */}
        <section className="why-section">
          <h3>Pourquoi choisir PassPro ?</h3>
          <div className="why-features">
            <div>
              <div className="why-icon">🛡️</div>
              <b>Paiement sécurisé</b>
              <div>Transactions cryptées et protégées</div>
            </div>
            <div>
              <div className="why-icon">💳</div>
              <b>Plusieurs moyens de paiement</b>
              <div>Cartes, Mobile Money, etc.</div>
            </div>
          </div>
        </section>
        <section className="footer-section">
  <div className="footer-logo">
    <span className="logo-icon">🎫</span>
    <span className="logo-text">PASS<span style={{color:"#d32f2f"}}>PRO</span></span>
  </div>
  <div className="footer-links">
    <a href="#">Aide</a>
    <a href="#">Contact</a>
    <a href="#">CGV</a>
    <a href="#">Confidentialité</a>
  </div>
  <div className="footer-icons">
    <span>📞</span>
    <span>✉️</span>
    <span>🌐</span>
    <span>🐦</span>
    <span>📱</span>
  </div>
  <div className="footer-copy">
    © 2024 PassPro. Tous droits réservés.
  </div>
</section>
      </main>

      {/* Barre de navigation bas */}
      <nav className="bottom-nav">
        <Link to="/" className="nav-item active">
          <span role="img" aria-label="Accueil">🏠</span>
          <div>Accueil</div>
        </Link>
        <Link to="/checkout" className="nav-item">
          <span role="img" aria-label="Panier">🛒</span>
          <div>Panier</div>
        </Link>
        <Link to="/tickets" className="nav-item">
          <span role="img" aria-label="Mes tickets">🎟️</span>
          <div>Mes tickets</div>
        </Link>
      </nav>
    </div>
  );
}