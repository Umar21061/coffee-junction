import "./Features.css";


import {
  FaWifi,
  FaSnowflake,
  FaCar,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaWifi />,
    number: "01",
    title: "FREE WIFI",
    description: "Stay connected while you relax",
  },
  {
    icon: <FaSnowflake />,
    number: "02",
    title: "AIR CONDITIONED",
    description: "A cool and comfortable atmosphere",
  },
  {
    icon: <FaCar />,
    number: "03",
    title: "EASY PARKING",
    description: "Convenient parking for every visit",
  },
  {
    icon: <FaClock />,
    number: "04",
    title: "FAST SERVICE",
    description: "Fresh food, served without the wait",
  },
];

function Features() {
  return (
    <section className="cjf-features" id="features">

      {/* Background */}
      <div className="cjf-features__bg"></div>

      <div className="cjf-features__container">

        {/* Top Heading */}
        <div className="cjf-features__heading">

          <div className="cjf-features__eyebrow">
            <span></span>
            WHY COFFEE JUNCTION
            <span></span>
          </div>

          <h2>
            Everything You Need
            <br />
            For A <em>Perfect Visit</em>
          </h2>

        </div>

        {/* Features */}
        <div className="cjf-features__grid">

          {features.map((feature) => (
            <div
              className="cjf-feature"
              key={feature.number}
            >

              {/* Number */}
              <div className="cjf-feature__number">
                {feature.number}
              </div>

              {/* Icon */}
              <div className="cjf-feature__icon">
                <div className="cjf-feature__icon-ring">
                  {feature.icon}
                </div>
              </div>

              {/* Text */}
              <div className="cjf-feature__content">

                <h3>
                  {feature.title}
                </h3>

                <div className="cjf-feature__line"></div>

                <p>
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;