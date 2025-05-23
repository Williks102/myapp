import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter une vraie vérification (API)
    if (email) {
      localStorage.setItem("user", JSON.stringify({ email, role }));
      navigate("/"); // Redirige vers l'accueil
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Connexion à votre compte</h2>
        <div className="login-tabs">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
            type="button"
          >
            👤 Utilisateur
          </button>
          <button
            className={role === "promoter" ? "active" : ""}
            onClick={() => setRole("promoter")}
            type="button"
          >
            🗂️ Promoteur
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <label className="login-label">Adresse email</label>
          <input
            type="email"
            className="login-input"
            placeholder="exemple@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button className="login-submit" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}