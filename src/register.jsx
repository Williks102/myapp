import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Register() {
  const [role, setRole] = useState("buyer");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = name && email && password;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Enregistre l'utilisateur (exemple simple)
      localStorage.setItem(
        "user",
        JSON.stringify({ name, email, role })
      );
      navigate("/"); // Redirige vers l'accueil après inscription
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Créer un compte</h2>
        <div className="login-tabs">
          <button
            className={role === "buyer" ? "active" : ""}
            onClick={() => setRole("buyer")}
            type="button"
          >
            <span role="img" aria-label="buyer">🛒</span> Acheteur
          </button>
          <button
            className={role === "promoter" ? "active" : ""}
            onClick={() => setRole("promoter")}
            type="button"
          >
            <span role="img" aria-label="promoter">🗂️</span> Promoteur
          </button>
        </div>
        <form onSubmit={handleRegister}>
          <label className="login-label">Nom complet</label>
          <input
            type="text"
            className="login-input"
            placeholder="Votre nom"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <label className="login-label">Adresse email</label>
          <input
            type="email"
            className="login-input"
            placeholder="exemple@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label className="login-label">Mot de passe</label>
          <input
            type="password"
            className="login-input"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className="login-submit" type="submit" disabled={!isFormValid}>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}