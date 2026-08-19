import "./Menu.css";

import {
  FaCoffee,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaGlassCheers,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const cjmMenuItems = [
  {
    image: "/coffee.png",
    icon: <FaCoffee />,
    title: "COFFEE &",
    subtitle: "BEVERAGES",
    line1: "Hot Coffee, Cold Coffee,",
    line2: "Shakes, Mojitos & more",
  },
  {
    image: "/pizza.png",
    icon: <FaPizzaSlice />,
    title: "PIZZA",
    subtitle: "",
    line1: "Cheese Pizza, Chicken Pizza,",
    line2: "Pepperoni & Special Pizza",
  },
  {
    image: "/burger.png",
    icon: <FaHamburger />,
    title: "FAST FOOD",
    subtitle: "",
    line1: "Zinger Burger, Shawarma,",
    line2: "Nuggets, Fries & more",
  },
  {
    image: "/desset.png",
    icon: <FaIceCream />,
    title: "DESSERTS",
    subtitle: "",
    line1: "Cakes, Brownies,",
    line2: "Waffles, Ice Cream",
  },
  {
    image: "/mint.png",
    icon: <FaGlassCheers />,
    title: "MOCKTAILS &",
    subtitle: "REFRESHERS",
    line1: "Fresh Mojitos, Lemonade,",
    line2: "Coolers & more",
  },
];

function Menu() {
  const navigate = useNavigate();

  return (
    <section className="cjm-menu-section" id="menu">

      {/* BACKGROUND */}
      <div className="cjm-menu-bg"></div>
      <div className="cjm-menu-dark-overlay"></div>

      {/* MAIN CONTENT */}
      <div className="cjm-menu-wrapper">

        {/* HEADER */}
        <div className="cjm-menu-header">

          <div className="cjm-menu-eyebrow">

            <span className="cjm-menu-line"></span>

            <span className="cjm-menu-eyebrow-text">
              OUR MENU
            </span>

            <span className="cjm-menu-line"></span>

          </div>

          <h2 className="cjm-menu-heading">
            Premium Flavors,
            <br />
            Perfect <em>Experience</em>
          </h2>

          <p className="cjm-menu-description">
            From handcrafted coffee to delicious fast food,
            <br />
            every meal is made to satisfy your cravings.
          </p>

        </div>


        {/* CARDS */}
        <div className="cjm-menu-cards">

          {cjmMenuItems.map((item, index) => (

            <div
              className="cjm-menu-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="cjm-menu-card-image">

                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  loading="lazy"
                  decoding="async"
                />

                <div className="cjm-menu-image-overlay"></div>

              </div>


              {/* CONTENT */}
              <div className="cjm-menu-card-content">

                {/* ICON */}
                <div className="cjm-menu-card-icon">
                  {item.icon}
                </div>


                {/* TITLE */}
                <h3 className="cjm-menu-card-title">

                  {item.title}

                  {item.subtitle && (
                    <>
                      <br />
                      {item.subtitle}
                    </>
                  )}

                </h3>


                {/* GOLD DECORATION */}
                <div className="cjm-menu-card-decoration">
                  <span></span>
                </div>


                {/* TEXT */}
                <p className="cjm-menu-card-text">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>


                {/* EXPLORE BUTTON */}
                <button
                  className="cjm-menu-explore"
                  type="button"
                  onClick={() => navigate("/menu")}
                >
                  EXPLORE
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* FOOTER */}
        <div className="cjm-menu-footer">

          <div className="cjm-footer-logo">

            <div className="cjm-footer-coffee">
              <FaCoffee />
            </div>

            <div className="cjm-footer-coffee-text">
              COFFEE
            </div>

            <div className="cjm-footer-junction-text">
              JUNCTION
            </div>

          </div>


          <div className="cjm-footer-divider"></div>


          <div className="cjm-footer-content">

            <div className="cjm-footer-tagline">
              <span>Good Food</span>
              <b>•</b>
              <span>Good Coffee</span>
              <b>•</b>
              <span>Good Time</span>
            </div>

            <div className="cjm-footer-brand">
              C O F F E E &nbsp; J U N C T I O N
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Menu;