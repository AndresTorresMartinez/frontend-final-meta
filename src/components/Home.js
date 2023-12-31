// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Sección del Plato del Día */}
      <section className="banner">
        <h1>Welcome to Our Restaurant</h1>
        <p>Discover a world of flavors with our exquisite dishes.</p>
        <Link to="/reservation">
          <button>Make a Reservation</button>
        </Link>
      </section>

      <section>
        <h2>Special Dish of the Day</h2>
        <p>Today's featured dish: Grilled Salmon with Lemon Herb Sauce</p>
        <p>Available for a limited time. Don't miss out!</p>
      </section>

      {/* Sección de Platos de Muestra */}
      <section>
        <h2>Featured Dishes</h2>
        <div className="dish-cards">
          <div className="dish-card">
            <img src="paella.png" alt="Paella" />
            <h3>Paella</h3>
            <p>Traditional Spanish rice dish with a mix of seafood and meat.</p>
          </div>
          <div className="dish-card">
            <img src="ratatouille.png" alt="Ratatouille" />
            <h3>Ratatouille</h3>
            <p>A French Provençal stewed vegetable dish, originating in Nice.</p>
          </div>
          {/* Agrega más tarjetas según sea necesario */}
        </div>
      </section>

      {/* Sección de Testimonios de Usuarios */}
      <section>
        <h2>User Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The food was amazing! I'll definitely be back."</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial-card">
            <p>"Great service and delicious dishes. Highly recommend!"</p>
            <p>- John Smith</p>
          </div>
          {/* Agrega más tarjetas de testimonios según sea necesario */}
        </div>
      </section>
    </>
  );
};

export default Home;
