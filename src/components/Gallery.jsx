
import "./Gallery.css";

import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jfif";
import g3 from "../assets/images/g3.jfif";
import g4 from "../assets/images/g6.jpg";
import g5 from "../assets/images/g5.jfif";

const galleryImages = [
  {
    image: g1,
    title: "Our Journey",
    subtitle: "Moments that matter",
  },
  {
    image: g2,
    title: "Good Times",
    subtitle: "Shared with our people",
  },
  {
    image: g3,
    title: "Special Moments",
    subtitle: "Memories at Coffee Junction",
  },
  {
    image: g4,
    title: "Together",
    subtitle: "Creating unforgettable memories",
  },
  {
    image: g5,
    title: "Coffee & Memories",
    subtitle: "A place to connect",
  },
];

function Gallery() {
  return (
    <section className="cjm-gallery-section" id="gallery">

      {/* BACKGROUND */}
      <div className="cjm-gallery-bg"></div>
      <div className="cjm-gallery-overlay"></div>

      {/* MAIN CONTENT */}
      <div className="cjm-gallery-wrapper">

        {/* HEADER */}
        <div className="cjm-gallery-header">

          <div className="cjm-gallery-eyebrow">
            <span className="cjm-gallery-line"></span>

            <span className="cjm-gallery-eyebrow-text">
              OUR GALLERY
            </span>

            <span className="cjm-gallery-line"></span>
          </div>

          <h2 className="cjm-gallery-heading">
            Moments Worth
            <br />
            <em>Remembering</em>
          </h2>

          <p className="cjm-gallery-description">
            From memorable meetups to everyday moments, our gallery captures
            <br />
            the people, memories and experiences that make Coffee Junction special.
          </p>

        </div>


        {/* GALLERY GRID */}
        <div className="cjm-gallery-grid">

          {galleryImages.map((item, index) => (

            <div
              className={`cjm-gallery-item cjm-gallery-item-${index + 1}`}
              key={index}
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
              />

              {/* IMAGE OVERLAY */}
              <div className="cjm-gallery-image-overlay"></div>

              {/* IMAGE CONTENT */}
              <div className="cjm-gallery-content">

                <span className="cjm-gallery-number">
                  0{index + 1}
                </span>

                <div className="cjm-gallery-small-line"></div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM DECORATION */}
        <div className="cjm-gallery-bottom">

          <span></span>

          <div className="cjm-gallery-bottom-text">
            COFFEE • PEOPLE • MEMORIES
          </div>

          <span></span>

        </div>

      </div>

    </section>
  );
}

export default Gallery;
