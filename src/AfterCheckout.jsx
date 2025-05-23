import React from "react";
import "./App.css";

export default function AfterCheckout() {
  // Ces données peuvent venir du contexte, props ou navigation d'état
  const order = {
    eventName: "J HAINE",
    date: "2025-05-28 16:00",
    location: "Sofitel-Hotel Ivoire",
    quantity: 2,
    price: 10000,
    total: 20000,
    buyer: "Jean Dupont",
    email: "jean.dupont@email.com",
    orderId: "CMD20250528-001",
  };

  return (
    <div className="after-checkout-container">
      <div className="ticket-card">
        <h2>🎟️ Votre billet</h2>
        <div className="ticket-info">
          <div><b>Événement :</b> {order.eventName}</div>
          <div><b>Date :</b> {order.date}</div>
          <div><b>Lieu :</b> {order.location}</div>
          <div><b>Quantité :</b> {order.quantity}</div>
          <div><b>Total payé :</b> {order.total} FCFA</div>
        </div>
        <div className="ticket-buyer">
          <div><b>Nom :</b> {order.buyer}</div>
          <div><b>Email :</b> {order.email}</div>
          <div><b>Commande n° :</b> {order.orderId}</div>
        </div>
        <div className="ticket-footer">
          Merci pour votre achat !<br />
          Présentez ce billet à l'entrée de l'événement.
        </div>
      </div>
    </div>
  );
}