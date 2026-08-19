import React from "react";
import "./MenuPage.css";

import {
  FaCoffee,
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaGlassCheers,
  FaDrumstickBite,
  FaHotdog,
  FaUtensils,
  FaPepperHot,
  FaWhatsapp,
  FaSearch,
  FaChevronDown,
  FaTimes,
  FaHome,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

/* ============================================================
   WHATSAPP
============================================================ */

const WHATSAPP_NUMBER = "923110779966";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;


/* ============================================================
   MENU DATA
   KEEP YOUR COMPLETE EXISTING menuSections ARRAY HERE
============================================================ */

const menuSections = [
  /* ==========================================================
     PIZZA
  ========================================================== */

  {
    id: "pizza",
    icon: <FaPizzaSlice />,
    eyebrow: "FROM THE OVEN",
    title: "Pizza",
    description:
      "Freshly baked, loaded with cheese and made to order.",
    featured: true,

    groups: [
      {
        name: "Classic Pizzas",
        sizes: ["Medium", "Large", "XL Large"],

        items: [
          { name: "Supreme Pizza", prices: ["1650", "2250", "—"] },
          { name: "Junction Special Pizza", prices: ["1650", "2250", "—"] },
          { name: "Kabab Stuffer", prices: ["1520", "2050", "2950"] },
          { name: "Cheese Stuffer", prices: ["1520", "2050", "2950"] },
          { name: "Cheese Lover", prices: ["1520", "2050", "2950"] },
          { name: "Crown Crust", prices: ["1520", "2050", "2950"] },
          { name: "Calzone Pizza", prices: ["1520", "2050", "2950"] },
          { name: "Lazania Pizza", prices: ["1520", "2050", "2950"] },
        ],
      },

      {
        name: "Delicious Treats",
        sizes: ["Small", "Medium", "Large", "XL Large"],

        items: [
          { name: "Bone Fire", prices: ["630", "1250", "1850", "2650"] },
          { name: "Chicken Achari", prices: ["630", "1250", "1850", "2650"] },
          { name: "Chicken Tandoori", prices: ["630", "1250", "1850", "2650"] },
          { name: "Malai Boti", prices: ["630", "1250", "1850", "2650"] },
          { name: "Royal Supreme", prices: ["630", "1250", "1850", "2650"] },
          { name: "Behari Kabab", prices: ["630", "1250", "1850", "2650"] },
        ],
      },

      {
        name: "Standard Pizza",
        sizes: ["Small", "Medium", "Large", "XL Large"],

        items: [
          { name: "Chicken Tikka", prices: ["570", "1150", "1650", "2350"] },
          { name: "Hot & Spicy", prices: ["570", "1150", "1650", "2350"] },
          { name: "Cheese Lover", prices: ["570", "1150", "1650", "2350"] },
          { name: "Chicken Fajita", prices: ["570", "1150", "1650", "2350"] },
          { name: "Veggie Lover", prices: ["570", "1150", "1650", "2350"] },
        ],
      },
    ],
  },

  /* ==========================================================
     BURGERS
  ========================================================== */

  {
    id: "burgers",
    icon: <FaHamburger />,
    eyebrow: "STACKED & LOADED",
    title: "Burgers",
    description:
      "Juicy burgers, crispy chicken and Coffee Junction specials.",

    groups: [
      {
        name: "Burgers",

        items: [
          { name: "Zinger Burger", price: "450" },
          { name: "Chappy Burger", price: "370" },
          { name: "Karizma Burger", price: "350" },
          { name: "Master Mighty Burger", price: "550" },
          { name: "Grill Burger", price: "570" },
          { name: "Reggie Burger", price: "350" },
        ],
      },

      {
        name: "Special",

        items: [
          {
            name: "Special Pizza Burger",
            price: "650",
            featured: true,
          },
        ],
      },
    ],
  },

  /* ==========================================================
     SHAWARMA
  ========================================================== */

  {
    id: "shawarma",
    icon: <FaHotdog />,
    eyebrow: "FRESH & FLAVORFUL",
    title: "Shawarma",
    description:
      "Loaded wraps packed with flavor and our signature sauces.",

    groups: [
      {
        name: "Shawarma",

        items: [
          { name: "Zinger Shawarma", price: "350" },
          { name: "Chicken Shawarma", price: "300" },
          { name: "Grill Shawarma", price: "480" },
          { name: "Kabab Shawarma", price: "520" },
        ],
      },
    ],
  },

  /* ==========================================================
     PASTA & FRIES
  ========================================================== */

  {
    id: "pasta-fries",
    icon: <FaUtensils />,
    eyebrow: "COMFORT FOOD",
    title: "Pasta & Fries",
    description:
      "Creamy, crunchy and loaded sides for every craving.",

    groups: [
      {
        name: "Pasta",
        sizes: ["Small", "Large"],

        items: [
          { name: "Creamy Pasta", prices: ["400", "650"] },
          { name: "Crunchy Pasta", prices: ["450", "700"] },
          { name: "Flaming Pasta", prices: ["400", "650"] },
        ],
      },

      {
        name: "Fries & Sides",
        sizes: ["Small", "Large"],

        items: [
          { name: "Pizza Fries", prices: ["450", "650"] },
          { name: "Fries", prices: ["250", "350"] },
        ],
      },

      {
        name: "Special",

        items: [
          { name: "Pizza Sandwich", price: "700" },
          {
            name: "Creamy Melt Pizza",
            price: "1650",
            note: "Medium",
          },
        ],
      },
    ],
  },

  /* ==========================================================
     PARATHAS WRAPS ROLLS
  ========================================================== */

  {
    id: "paratha-wraps-rolls",
    icon: <FaHotdog />,
    eyebrow: "WRAPPED WITH LOVE",
    title: "Parathas, Wraps & Rolls",
    description:
      "Freshly prepared favorites, perfect for a quick bite.",

    groups: [
      {
        name: "Parathas",

        items: [
          { name: "Chicken Paratha", price: "350" },
          { name: "Kabab Paratha", price: "450" },
          { name: "Zinger Paratha", price: "450" },
          { name: "Special Junction Paratha", price: "580" },
        ],
      },

      {
        name: "Wraps",

        items: [
          { name: "Chicken Wrap", price: "450" },
          { name: "Grill Wrap", price: "630" },
          { name: "Zinger Wrap", price: "550" },
          { name: "Mexican Wrap", price: "750" },
        ],
      },

      {
        name: "Rolls",

        items: [
          { name: "Cheese Roll", price: "650" },
          { name: "Chilli Milli Roll", price: "650" },
          { name: "Spine Roll", price: "650" },
          { name: "Behari Roll", price: "700" },
        ],
      },
    ],
  },

  /* ==========================================================
     WINGS
  ========================================================== */

  {
    id: "wings",
    icon: <FaDrumstickBite />,
    eyebrow: "CRISPY & JUICY",
    title: "Wings & Nuggets",
    description:
      "Crispy bites, seasoned and served fresh.",

    groups: [
      {
        name: "Wings",

        items: [
          { name: "Hot Wings — 10 Pc", price: "600" },
          { name: "Peri Peri Wings — 10 Pc", price: "680" },
          { name: "Bar B Q Wings — 10 Pc", price: "680" },
          { name: "Nuggets — 10 Pc", price: "500" },
        ],
      },
    ],
  },

  /* ==========================================================
     COFFEE
  ========================================================== */

  {
    id: "coffee",
    icon: <FaCoffee />,
    eyebrow: "BREWED TO PERFECTION",
    title: "Coffee",
    description:
      "Rich coffee, handcrafted with care.",

    groups: [
      {
        name: "Hot Coffee",

        items: [
          { name: "Cappuccino", price: "600" },
          { name: "Cafe Latte", price: "600" },
          { name: "Espresso", price: "350" },
          { name: "Black Coffee", price: "350" },
          { name: "Matka Chai", price: "220" },
          { name: "Green Tea", price: "150" },
        ],
      },

      {
        name: "Flavour Latte",

        items: [
          { name: "Caramel Latte", price: "850" },
          { name: "French Vanilla Latte", price: "850" },
          { name: "Hazelnuts Latte", price: "850" },
          { name: "Spanish Latte", price: "850" },
          { name: "Mocha Latte", price: "850" },
          { name: "Hot Chocolate", price: "650" },
        ],
      },

      {
        name: "Over Iced Coffee",

        items: [
          { name: "Caramel Latte", price: "850" },
          { name: "French Vanilla Latte", price: "850" },
          { name: "Hazelnut Latte", price: "850" },
          { name: "Spanish Latte", price: "850" },
        ],
      },

      {
        name: "Cold Coffee Flavours",

        items: [
          { name: "Caramel", price: "850" },
          { name: "French Vanilla", price: "850" },
          { name: "Hazelnuts", price: "850" },
        ],
      },
    ],
  },

  /* ==========================================================
     COLD DRINKS
  ========================================================== */

  {
    id: "cold-drinks",
    icon: <FaGlassCheers />,
    eyebrow: "CHILLED & REFRESHING",
    title: "Cold Drinks",
    description:
      "Refreshing drinks made for good times.",

    groups: [
      {
        name: "Mocktails",

        items: [
          { name: "Passion Fruit", price: "750" },
          { name: "Peach Keen", price: "750" },
          { name: "Strawberry Sunshine", price: "750" },
          { name: "Mango Coconut", price: "750" },
        ],
      },

      {
        name: "Chiller",

        items: [
          { name: "Pina Colada", price: "750" },
          { name: "Blueberry Bliss", price: "600" },
          { name: "Mint Margarita", price: "450" },
          { name: "Stress Releaf", price: "650" },
        ],
      },

      {
        name: "Peach Iced Tea",

        items: [
          { name: "Peach Iced Tea", price: "500" },
        ],
      },

      {
        name: "Shakes",

        items: [
          { name: "Kit Kat", price: "650" },
          { name: "Cookies & Cream", price: "650" },
          { name: "Chocolate", price: "650" },
        ],
      },

     
    ],
  },

  /* ==========================================================
     DESSERTS
  ========================================================== */

  {
    id: "desserts",
    icon: <FaIceCream />,
    eyebrow: "SWEET ENDINGS",
    title: "Cakes & Brownies",
    description:
      "A sweet finish to your Coffee Junction experience.",

    groups: [
      {
        name: "Brownies",

        items: [
          { name: "Classic Fudge Brownie", price: "350" },
          { name: "Chocolate Chip Brownie", price: "380" },
          { name: "Walnut Brownie", price: "380" },
          { name: "Oreo Brownie", price: "380" },
          { name: "Caramel Brownie", price: "380" },
          { name: "Nutella Brownie", price: "380" },
          { name: "Brownie with Ice Cream", price: "450" },
        ],
      },

      {
        name: "Cakes",

        items: [
          { name: "Chocolate Cake", price: "1800" },
          { name: "Fudge Cake", price: "2000" },
          { name: "Red Velvet Cake", price: "1800" },
          { name: "Caramel Cake", price: "1800" },
          { name: "Oreo Cake", price: "1800" },
          { name: "KitKat Cake", price: "1800" },
          { name: "Chocolate Truffle Cake", price: "2500" },
          { name: "Cheesecake — Blueberry", price: "2500" },
          { name: "Cheesecake — Strawberry", price: "2500" },
        ],
      },
    ],
  },

  /* ==========================================================
     EXTRAS
  ========================================================== */

  {
    id: "extras",
    icon: <FaPepperHot />,
    eyebrow: "MAKE IT YOURS",
    title: "Extras",
    description:
      "Add an extra touch to your favorite meal.",

    groups: [
      {
        name: "Extra Topping",
        sizes: ["Small", "Medium", "Large", "XL Large"],

        items: [
          {
            name: "Extra Topping",
            prices: ["100", "200", "300", "400"],
          },
        ],
      },

      {
        name: "Dip",

        items: [
          { name: "Dip", price: "100" },
        ],
      },
    ],
  },
];


/* ============================================================
   PRICE DISPLAY
============================================================ */

function PriceDisplay({ item, sizes }) {
  if (item.prices) {
    return (
      <div className="cjm-price-group">
        {item.prices.map((price, index) => (
          <div className="cjm-price" key={index}>
            <span className="cjm-price-label">
              {sizes?.[index]}
            </span>

            <span className="cjm-price-value">
              {price === "—" ? "—" : `Rs. ${price}`}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="cjm-single-price">
      {item.note && (
        <span className="cjm-item-note">
          {item.note}
        </span>
      )}

      <span>Rs. {item.price}</span>
    </div>
  );
}


/* ============================================================
   MENU GROUP
============================================================ */

function MenuGroup({ group }) {
  const whatsappMessage = encodeURIComponent(
    `Hi Coffee Junction! I would like to order from the ${group.name} menu.`
  );

  const orderUrl =
    `${WHATSAPP_URL}?text=${whatsappMessage}`;

  return (
    <div className="cjm-menu-group">

      <div className="cjm-group-heading">
        <span className="cjm-group-line"></span>

        <h3>{group.name}</h3>

        <span className="cjm-group-line"></span>
      </div>


      {group.sizes && (
        <div className="cjm-size-header">
          <span>ITEM</span>

          {group.sizes.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>
      )}


      <div className="cjm-items">

        {group.items.map((item, index) => (
          <div
            className={`cjm-menu-item ${
              item.featured ? "is-featured" : ""
            }`}
            key={index}
          >

            <div className="cjm-item-info">

              <span className="cjm-item-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h4>{item.name}</h4>

                {item.featured && (
                  <span className="cjm-special-label">
                    JUNCTION SPECIAL
                  </span>
                )}
              </div>

            </div>

            <PriceDisplay
              item={item}
              sizes={group.sizes}
            />

          </div>
        ))}

      </div>


      <a
        href={orderUrl}
        className="cjm-box-order-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Order ${group.name} on WhatsApp`}
      >
        <FaWhatsapp />
        <span>ORDER NOW</span>
      </a>

    </div>
  );
}


/* ============================================================
   MENU SECTION
============================================================ */

function MenuSection({ section }) {
  return (
    <section
      className={`cjm-full-menu-section ${
        section.featured
          ? "cjm-pizza-section"
          : ""
      }`}
      id={section.id}
    >

      <div className="cjm-section-heading">

        <div className="cjm-section-icon">
          {section.icon}
        </div>

        <div className="cjm-section-title-area">

          <span className="cjm-section-eyebrow">
            {section.eyebrow}
          </span>

          <h2>{section.title}</h2>

          <p>{section.description}</p>

        </div>

      </div>


      <div className="cjm-section-divider">
        <span></span>
      </div>


      <div className="cjm-groups-grid">

        {section.groups.map((group, index) => (
          <MenuGroup
            group={group}
            key={index}
          />
        ))}

      </div>

    </section>
  );
}


/* ============================================================
   MAIN PAGE
============================================================ */

function MenuPage() {

  const navigate = useNavigate();

  const [categoryOpen, setCategoryOpen] =
    React.useState(false);


  /* ==========================================================
     CATEGORY SELECT
  ========================================================== */

  const handleCategoryChange = (sectionId) => {

    setCategoryOpen(false);

    if (!sectionId) return;

    setTimeout(() => {

      const element =
        document.getElementById(sectionId);

      if (element) {

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 100);

  };


  /* ==========================================================
     HOME
  ========================================================== */

  const goHome = () => {
    navigate("/");
  };


  return (

    <main className="cjm-complete-menu">


      {/* ======================================================
          MOVING WELCOME HEADER
      ====================================================== */}

      <header className="cjm-menu-welcome-header">

        <div className="cjm-moving-track">

          <div className="cjm-moving-message">

            <span>
              ✦ WELCOME TO COFFEE JUNCTION
            </span>

            <span>
              • PLEASE PLACE YOUR ORDER
            </span>

            <span>
              • FRESH FOOD • GREAT COFFEE • GOOD MOOD
            </span>

            <span>
              • WE'RE READY TO SERVE YOU
            </span>

          </div>

        </div>

      </header>


      {/* ======================================================
          UNIVERSAL MENU CONTROL
      ====================================================== */}

      <div className="cjm-menu-control-bar">

        <div className="cjm-menu-control-inner">


          {/* HOME */}

          <button
            type="button"
            className="cjm-menu-home-btn"
            onClick={goHome}
          >
            <FaHome />

            <span>
              HOME
            </span>
          </button>


          {/* CATEGORY BUTTON */}

          <button
            type="button"
            className={`cjm-category-toggle ${
              categoryOpen
                ? "is-open"
                : ""
            }`}
            onClick={() =>
              setCategoryOpen(
                !categoryOpen
              )
            }
            aria-expanded={categoryOpen}
          >

            <FaSearch />

            <span>
              SEARCH CATEGORY
            </span>

            <FaChevronDown
              className="cjm-category-arrow"
            />

          </button>

        </div>


        {/* ====================================================
            CATEGORY DROPDOWN
        ==================================================== */}

        <div
          className={`cjm-category-dropdown ${
            categoryOpen
              ? "is-open"
              : ""
          }`}
        >

          <div className="cjm-category-dropdown-inner">

            <div className="cjm-category-dropdown-heading">

              <div>

                <span>
                  COFFEE JUNCTION
                </span>

                <h3>
                  Explore Our Menu
                </h3>

              </div>

              <button
                type="button"
                onClick={() =>
                  setCategoryOpen(false)
                }
                aria-label="Close categories"
              >
                <FaTimes />
              </button>

            </div>


            <div className="cjm-category-grid">

              {menuSections.map(
                (section) => (

                  <button
                    type="button"
                    key={section.id}
                    className="cjm-category-item"
                    onClick={() =>
                      handleCategoryChange(
                        section.id
                      )
                    }
                  >

                    <span className="cjm-category-icon">
                      {section.icon}
                    </span>

                    <span className="cjm-category-name">
                      {section.title}
                    </span>

                    <span className="cjm-category-go">
                      →
                    </span>

                  </button>

                )
              )}

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          MENU CONTENT
      ====================================================== */}

      <div className="cjm-menu-page-wrapper">

        {menuSections.map(
          (section) => (

            <MenuSection
              section={section}
              key={section.id}
            />

          )
        )}


        {/* ====================================================
            BOTTOM CTA
        ==================================================== */}

        <section className="cjm-menu-cta">

          <div className="cjm-cta-decoration left"></div>

          <div className="cjm-cta-decoration right"></div>

          <span className="cjm-cta-eyebrow">
            FRESH • FAST • DELICIOUS
          </span>

          <h2>
            Your Table Is
            <em> Waiting.</em>
          </h2>

          <p>
            Visit Coffee Junction or order your
            favorites for home delivery.
          </p>

          <div className="cjm-cta-buttons">

            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                "Hi Coffee Junction! I would like to place an order."
              )}`}
              className="cjm-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              ORDER NOW
            </a>

            <button
              type="button"
              className="cjm-cta-secondary"
              onClick={() => {
                setCategoryOpen(true);
              }}
            >
              <FaSearch />
              VIEW MENU
            </button>

          </div>

          <div className="cjm-cta-bottom">

            Renala Khurd Bypass • Multan Road

            <span>•</span>

            0311-4648875

          </div>

        </section>


        {/* ====================================================
            FOOTER
        ==================================================== */}

        <footer className="cjm-menu-page-footer">

          <div className="cjm-footer-mark">
            <FaCoffee />
          </div>

          <div>

            <strong>
              COFFEE JUNCTION
            </strong>

            <span>
              PIZZA & FAST FOOD
            </span>

          </div>

          <p>
            Good Food. Good Mood.
          </p>

        </footer>

      </div>


      {/* ======================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <a
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(
          "Hi Coffee Junction! I would like to place an order."
        )}`}
        className="cjm-whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        title="Order on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </main>
  );
}


export default MenuPage;