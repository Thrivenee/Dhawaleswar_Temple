import React, { useState } from "react";
import "./Gallery.css";

// ✅ Import Images
import image from "../assest/gallery/image.png";
import image1 from "../assest/gallery/image1.png";
import image2 from "../assest/gallery/image2.png";
import image3 from "../assest/gallery/image3.png";
import image4 from "../assest/gallery/image4.png";
import image5 from "../assest/gallery/image5.png";
import image6 from "../assest/gallery/image6.png";
import image7 from "../assest/gallery/image7.png";
import image8 from "../assest/gallery/image8.png";
import image9 from "../assest/gallery/image9.png";
import image10 from "../assest/gallery/image10.png";
import image11 from "../assest/gallery/image11.png";
import image12 from "../assest/gallery/image12.png";
import image13 from "../assest/gallery/image13.png";
import image14 from "../assest/gallery/image14.png";
import image15 from "../assest/gallery/image15.png";

// ✅ Local Videos
import video1 from "../assest/gallery/video1.mp4";
import video2 from "../assest/gallery/video2.mp4";

function Gallery() {
  const images = [
    image, image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
    image13, image14, image15
  ];

  const videos = [
    { type: "youtube", src: "https://www.youtube.com/embed/khoM-9NTtUw" },
    { type: "youtube", src: "https://www.youtube.com/embed/nYUThh8cugg" },
    { type: "local", src: video1 },
    { type: "local", src: video2 }
  ];

  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const displayedImages = showAllImages ? images : images.slice(0, 8);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="gallery-page">
      {/* ✅ Hero Section */}
      <section className="hero about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>🔱 Dhabaleswar Temple Gallery 🔱</h1>
            <p>
              Experience the sacred charm of Dhabaleswar Temple through our
              gallery of images and videos.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ IMAGE GALLERY SECTION */}
      <section className="gallery-section">
        <h2>ॐ Dhabaleswar Temple Images ॐ</h2>
        <p>🔱 Discover the divine beauty of Dhabaleswar Temple through our photos.🔱</p>

        <div className="gallery-grid">
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {images.length > 3 && (
          <button
            className="see-more-btn"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            {showAllImages ? "Show Less" : "View More"}
          </button>
        )}
      </section>

      {/* ✅ VIDEO SECTION */}
      <section className="gallery-section">
        <h2>ॐ Dhabaleswar Temple Videos ॐ</h2>
        <p>🔱 Experience the divine moments through our video collection. 🔱</p>

        <div className="gallery-gridd">
          {videos.map((item, index) => (
            <div key={index} className="gallery-item">
              {item.type === "local" ? (
                <video src={item.src} muted />
              ) : (
                <iframe
                  src={item.src}
                  title={`YouTube ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ IMAGE LIGHTBOX WITH PREV/NEXT */}
      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>

          {/* Navigation Buttons */}
          <button className="nav-btn prev-btn" onClick={showPrevImage}>
            ❮ 
          </button>
          <button className="nav-btn next-btn" onClick={showNextImage}>
             ❯
          </button>

          <img
            className="lightbox-img"
            src={images[selectedImageIndex]}
            alt="Gallery View"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
