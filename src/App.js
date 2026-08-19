import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MenuPage from "./components/MenuPage";

import { FaWhatsapp } from "react-icons/fa";


/* ============================================================
   WHATSAPP
============================================================ */

const WHATSAPP_NUMBER = "923110779966";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;


/* ============================================================
   FLOATING WHATSAPP
============================================================ */

function FloatingWhatsApp() {

  const whatsappMessage = encodeURIComponent(
    "Hi Coffee Junction! I would like to place an order."
  );

  return (
    <a
      href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
      className="cjm-whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      title="Order on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}


/* ============================================================
   GLOBAL LAYOUT
============================================================ */

function AppLayout() {

  const location = useLocation();

  // Hide main Navbar on Menu Page
  const isMenuPage = location.pathname === "/menu";

  // Show WhatsApp only on Home Page
  const isHomePage = location.pathname === "/";


  return (
    <>
      <ScrollToTop />

      {!isMenuPage && <Navbar />}


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/menu"
          element={<MenuPage />}
        />

      </Routes>


      {/* ======================================================
          HOME PAGE WHATSAPP
      ====================================================== */}

      {isHomePage && <FloatingWhatsApp />}

    </>
  );
}


/* ============================================================
   APP
============================================================ */

function App() {

  return (
    <BrowserRouter>

      <AppLayout />

    </BrowserRouter>
  );
}


export default App;