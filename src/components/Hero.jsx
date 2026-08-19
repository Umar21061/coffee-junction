import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/923110779966?text=Hello%20Coffee%20Junction%2C%20I%20would%20like%20to%20book%20a%20table.",
      "_blank"
    );
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/hero.png')"
      }}
    >

      <div className="overlay">

        <div className="hero-content">

          {/* ==================================================
              TAGLINE
          ================================================== */}
          <span className="tagline">
            PREMIUM COFFEE • FRESH FOOD • COZY ATMOSPHERE
          </span>


          {/* ==================================================
              HEADING
          ================================================== */}
          <h1>
            Coffee
            <span>Junction</span>
          </h1>


          {/* ==================================================
              DESCRIPTION
          ================================================== */}
          <p>
            Experience the perfect blend of rich coffee,
            delicious food and a warm atmosphere.
          </p>


          {/* ==================================================
              HERO BUTTONS
          ================================================== */}
          <div className="hero-buttons">

            {/* Explore Menu */}

            <Link
              to="/menu"
              className="primary"
            >
              Explore Menu
            </Link>


            {/* Book a Table */}

            <button
              className="secondary"
              onClick={openWhatsApp}
            >
              Book a Table
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;