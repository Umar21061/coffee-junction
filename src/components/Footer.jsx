
import {
  FaCoffee,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="cjf-footer">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="cjf-footer__glow"></div>

      <div className="cjf-footer__container">

        {/* =================================================
            TOP BRAND
        ================================================= */}

        <div className="cjf-footer__brand">

          <div className="cjf-footer__brand-line"></div>

          <div className="cjf-footer__logo">

            <div className="cjf-footer__logo-icon">
              <FaCoffee />
            </div>

            <div className="cjf-footer__logo-name">
              COFFEE
            </div>

            <div className="cjf-footer__logo-name cjf-footer__logo-name--bottom">
              JUNCTION
            </div>

          </div>

          <div className="cjf-footer__brand-line"></div>

        </div>


        {/* =================================================
            MAIN TITLE
        ================================================= */}

        <div className="cjf-footer__hero">

          <div className="cjf-footer__eyebrow">
            <span></span>
            GOOD FOOD • GOOD COFFEE • GOOD TIME
            <span></span>
          </div>

          <h2>
            Your Perfect
            <br />
            <em>Coffee Moment</em>
          </h2>

          <p>
            Fresh flavors, handcrafted coffee and good moments —
            <br />
            all waiting for you at Coffee Junction.
          </p>

        </div>


        {/* =================================================
            INFORMATION
        ================================================= */}

        <div className="cjf-footer__info">

          {/* LOCATION */}

          <div className="cjf-footer__info-item">

            <div className="cjf-footer__info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <span className="cjf-footer__info-label">
                FIND US
              </span>

              <p>
                Lahore Multan Road,
                <br />
                Renala Khurd
              </p>

            </div>

          </div>


          {/* PHONE */}

          <div className="cjf-footer__info-item">

            <div className="cjf-footer__info-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <span className="cjf-footer__info-label">
                CALL US
              </span>

              <p>
                0311-0779966
              </p>

            </div>

          </div>


          {/* SOCIAL */}

          <div className="cjf-footer__info-item">

            <div className="cjf-footer__info-icon">
              <FaCoffee />
            </div>

            <div>

              <span className="cjf-footer__info-label">
                FOLLOW US
              </span>

              <div className="cjf-footer__socials">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/coffeejunction_rk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>


                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/profile.php?id=61592604740421"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="cjf-footer__divider">

          <span></span>

          <FaCoffee />

          <span></span>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="cjf-footer__bottom">

          <p>
            © 2026 Coffee Junction. All Rights Reserved.
          </p>


          {/* BACK TO TOP */}

          <button
            className="cjf-footer__top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>


          <p>
            Crafted with <span>♥</span> for coffee lovers
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
