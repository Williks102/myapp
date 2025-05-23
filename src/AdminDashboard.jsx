import React from "react";
import "./App.css";

const allEvents = [
  { id: 1, name: "J HAINE", promoter: "Jean", date: "2025-05-28", status: "En ligne" },
  { id: 2, name: "Festival Jazz", promoter: "Marie", date: "2025-06-10", status: "Brouillon" },
];

export default function AdminDashboard() {
  return (
    <div className="main-content">
      <h2>Administration – Tous les événements</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Promoteur</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allEvents.map(ev => (
            <tr key={ev.id}>
              <td>{ev.name}</td>
              <td>{ev.promoter}</td>
              <td>{ev.date}</td>
              <td>{ev.status}</td>
              <td>
                <button className="pay-btn">Voir</button>
                <button className="pay-btn" style={{marginLeft: 8}}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}