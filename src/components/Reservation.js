// Reservation.js

import React, { useState } from 'react';
import ReservationModal from './ReservationModal';

const ReservationPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReservation = () => {
    // Implementa tu lógica de reservación aquí
    console.log('Detalles de la reserva:', { date, time, guests, occasion });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="reservation-page">
      <h1>Reservation Page</h1>
      <form>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div>
          <label>Occasion:</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="">Select an Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="celebration">Celebration</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="button" onClick={handleReservation}>
          Make Reservation
        </button>
      </form>
      {isModalOpen && <ReservationModal onClose={closeModal} />}
    </div>
  );
};

export default ReservationPage;
