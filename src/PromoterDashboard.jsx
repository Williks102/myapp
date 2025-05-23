import React from "react";
import "./App.css";

const myEvents = [
  { id: 1, name: "J HAINE", date: "2025-05-28", ticketsSold: 120, status: "En ligne" },
  { id: 3, name: "Brunch Party", date: "2025-07-05", ticketsSold: 45, status: "Brouillon" },
];

export default function PromoterDashboard() {
  return (
    <div className="main-content">
      <h2>Mes événements</h2>
      <button className="pay-btn" style={{marginBottom: 18}}>Créer un événement</button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Billets vendus</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myEvents.map(ev => (
            <tr key={ev.id}>
              <td>{ev.name}</td>
              <td>{ev.date}</td>
              <td>{ev.ticketsSold}</td>
              <td>{ev.status}</td>
              <td>
                <button className="pay-btn">Modifier</button>
                <button className="pay-btn" style={{marginLeft: 8}}>Voir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}