import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sloka.css'
function Sloka() {
  const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
};

   const slokas = [
    {
      title: "Shanti Mantra",
      text: `Om Sahana Vavatu Sahanau Bhunaktu
Sahaveeryam Karavavahai
Tejasvinavati Tamastu Ma Vidhwishavahai
Om Shanti Shanti Shantihi`,
      meaning:
        "A prayer for protection, cooperation, and peace between teacher and student, so learning can happen harmoniously.",
    },
    {
      title: "Guru Mantra",
      text: `Gurur Brahma Gurur Vishnu
Gurur Devo Maheshwarah
Gurur Saakshat Param Brahma
Tasmai Shree Gurave Namah`,
      meaning:
        "Honors the Guru as the embodiment of the divine, recognizing that the teacher is the guiding force of knowledge and wisdom.",
    },
    {
      title: "Gayatri Mantra",
      text: `Om Bhur Bhuva Swaha
Tat Savitur Varenyam
Bhargo Devasya Dheemahi
Dhiyo Yo Nah Prachodayat`,
      meaning:
        "A request for divine guidance and enlightenment, asking the universal light to inspire our intellect and lead us on the right path.",
    },
    {
      title: "Shiva Dhyana Sloka",
      text:"Shivāya Namastubhyam Shivatatvārtha Rūpiṇe,Pataye Sarva Bhūtānām Liṅgarūpāya Te Namah.",
       meaning:"Salutations to Lord Shiva, the embodiment of purity, peace, and truth — the supreme reality that exists in all beings. You are the divine force behind creation, preservation, and destruction. In your Lingam form, you represent the eternal cosmic energy that sustains the universe."
    },
    {
  title: "Maha Mrityunjaya Mantra",
  text: "Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat.",
  meaning: "We worship Lord Shiva, the three-eyed one, who nourishes and protects all. May He liberate us from the bondage of worldly suffering and grant us immortality and peace."
},

{
  title: "Rudra Gayatri Mantra",
  text: "Om Tatpurushaya Vidmahe Mahadevaya Dhimahi, Tanno Rudrah Prachodayat.",
  meaning: "Let us meditate on the supreme being, Lord Shiva, known as Mahadeva. May Rudra, the Lord of Power and Compassion, enlighten our minds and guide us toward truth."
},

{
  title: "Lingashtakam Shloka",
  text: "Brahma Murari Surarchita Lingam, Nirmala Bhasita Shobhita Lingam, Janmaja Dukha Vinaashaka Lingam, Tat Pranamami Sada Shiva Lingam.",
  meaning: "I bow to the holy Shiva Lingam, worshipped by Brahma, Vishnu, and the celestial beings. Adorned with pure sandal paste, it destroys the sorrows of birth and death and bestows eternal bliss."
},

  ];
  return (
    <div>
        <section className="hero about-hero">
        <div className="hero-content">
          <h1>Sloka / Mantra</h1>
          <p>Slokas bring peace, purity, and divine blessings to the temple</p>
        </div>
      </section>
      <div className="term-section">
        <div className="sloka-section">
      <h2 className="sloka-heading">Sloka / Mantra</h2>
      <Slider {...settings} className="sloka-slider">
        {slokas.map((item, index) => (
          <div key={index} className="sloka-card">
            <p className="sloka-text">{item.text}</p>
            <h4 className="sloka-title">{item.title}</h4>
            <p className="sloka-meaning">
              <strong>Meaning:</strong> {item.meaning}
            </p>
          </div>
        ))}
      </Slider>
    </div>
</div>
    </div>
  )
}

export default Sloka