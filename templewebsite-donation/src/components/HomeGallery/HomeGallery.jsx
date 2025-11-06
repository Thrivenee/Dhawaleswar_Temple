// src/components/HomeGallery.js
import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomeGallery.css";

// Import your images
import image1 from '../../assest/gallery/image1.png';
import image2 from '../../assest/gallery/image2.png';
import image3 from '../../assest/gallery/image3.png';
import image4 from '../../assest/gallery/image4.png';

function HomeGallery() {
 /* const [showAll, setShowAll] = useState(false);*/
const images = [image1, image2, image3, image4];
 const navigate = useNavigate();

return (
    <section className="home-gallery">
      <h2 className="gallery-title">ॐ Dhabaleswar Temple Gallery ॐ</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
<button
  className="view-more-btn"
  onClick={() => {
    navigate("/gallery");
    window.scrollTo(0, 0); 
  }}
>
View More
</button>
      
    </section>
  );}
export default HomeGallery;

