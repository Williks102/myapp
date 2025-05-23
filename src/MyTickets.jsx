import React from "react";
import "./App.css";

const tickets = [
  {
    id: 1,
    eventName: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    quantity: 2,
    price: 10000,
    total: 20000,
    code: "ABC123456",
  },
  {
    id: 2,
    eventName: "Festival Jazz",
    date: "2025-06-10 20:00",
    location: "Palais de la Culture",
    quantity: 1,
    price: 8000,
    total: 8000,
    code: "XYZ987654",
  },
];

export default function MyTickets() {
  return (
    <div className="main-content">
      <h2>Mes billets</h2>
      {tickets.length === 0 ? (
        <div className="no-events">Aucun billet pour le moment.</div>
      ) : (
        <div className="ticket-list">
          {tickets.map(ticket => (
            <div className="ticket-card" key={ticket.id}>
              <div className="ticket-info">
                <h3>{ticket.eventName}</h3>
                <div className="event-meta">
                  <span>📅 {ticket.date}</span>
                  <span>📍 {ticket.location}</span>
                </div>
                <div className="event-footer">
                  <span className="event-price">{ticket.total} FCFA</span>
                  <span className="ticket-qty">x{ticket.quantity}</span>
                </div>
                <div className="ticket-code">
                  Code billet : <b>{ticket.code}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}