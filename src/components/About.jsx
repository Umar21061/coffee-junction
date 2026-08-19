import "./About.css";
import aboutImg from "../assets/images/about1.png";
import {
  FaCoffee,
  FaHamburger,
  FaGlassCheers,
  FaHeart,
} from "react-icons/fa";

function About() {
  return (
    <section className="about-section"  id="about" >

      {/* LEFT IMAGE */}
      <div className="about-image">
        <img src={aboutImg} alt="Coffee Junction" />

        <div className="about-image-overlay">
          <span>EST.</span>
          <strong>2026</strong>
        </div>
      </div>


      {/* RIGHT CONTENT */}
      <div className="about-content">

        <span className="section-subtitle">
          OUR STORY
        </span>

        <h2>
          More Than Coffee.
          <br />
          <span>A Place To Belong.</span>
        </h2>

        <p className="about-intro">
          At Coffee Junction, we believe great coffee is only the beginning.
          We created a place where handcrafted drinks, delicious food and
          unforgettable moments come together.
        </p>

        <p className="about-description">
          Located in Renala Khurd, Coffee Junction brings together quality
          coffee, fresh food and a welcoming atmosphere under one roof.
          From your first morning coffee to an evening with friends, every
          visit is made with care, passion and attention to detail.
        </p>

        <div className="about-line"></div>

        {/* OFFERINGS */}
        <div className="offerings">

          <div className="offering">
            <div className="offering-icon">
              <FaCoffee />
            </div>

            <div>
              <h4>Handcrafted Coffee</h4>
              <p>
                Rich, freshly prepared coffee made for every coffee lover.
              </p>
            </div>
          </div>


          <div className="offering">
            <div className="offering-icon">
              <FaHamburger />
            </div>

            <div>
              <h4>Fresh Food</h4>
              <p>
                Burgers, pizzas, snacks and desserts prepared fresh.
              </p>
            </div>
          </div>


          <div className="offering">
            <div className="offering-icon">
              <FaGlassCheers />
            </div>

            <div>
              <h4>Refreshing Drinks</h4>
              <p>
                Delicious beverages created to match every mood.
              </p>
            </div>
          </div>


          <div className="offering">
            <div className="offering-icon">
              <FaHeart />
            </div>

            <div>
              <h4>Made With Love</h4>
              <p>
                Quality ingredients, friendly service and genuine care.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;