import React,{useState} from 'react'
import flowerPattern from '../../assest/flower-pattern.svg';
import { FaPrayingHands } from "react-icons/fa";
import badaOshaImg from "../../assest/bada-osha.jpg";
import dolaPurnimaImg from "../../assest/dola-purnima.jpg";
import kartikaPurnimaImg from "../../assest/kartika-purnima.jpg";
import mahashivaratriImg from "../../assest/mahashiv.jpg";
import paushaPurnimaImg from "../../assest/pausha-purnima.jpg";
import './Ourfestival.css'

function Ourfestival() {
        const [selectedFestival, setSelectedFestival] = useState(null);
        const [filter, setFilter] = useState("All");

     const festivals = [
    { name: "Bada Osha",
      category: "Bada Osha",
       image: badaOshaImg,
      description: `Bada Osha is one of the most important festivals dedicated to Lord Shiva, celebrated with great devotion at Dhabaleswar Temple. Observed on the Kartika Purnima (full moon day of the Kartika month), thousands of devotees take part in the rituals.

🌿 Sacred Fasting & Puja – Devotees observe day-long fasts and perform prayers for prosperity, health, and family well-being.

🪔 Special Aarti & Bhajans – The temple resonates with chants, devotional songs, and lighting of lamps.

🍛 Mahaprasad Offering – Devotees prepare and offer a unique dish made with rice, dal, and vegetables to Lord Shiva, later shared as prasad.

🌉 Cultural Gatherings – Large crowds gather near the temple, and the suspension bridge becomes a focal point of devotion and festivity.

✨ Bada Osha is believed to fulfill the wishes of devotees and bring divine blessings for peace, prosperity, and protection.`
  },
    {
      name: "Dola Purnima",
      category: "Dola Purnima",
      image: dolaPurnimaImg,
      description:
        `Dola Purnima is one of the most vibrant and joyous festivals in Odisha, dedicated to the worship of Lord Krishna and Radha. It is observed on the full moon day of the Falgun month and is often linked with the celebration of Holi.

🌸 Swing Festival – Idols of Lord Krishna and Radha are placed on beautifully decorated swings (Dolas) and carried in grand processions across villages and towns. Devotees gather to sing bhajans and dance with devotion.

🎨 Colors of Devotion – Just like Holi, devotees smear each other with gulal (colored powders), symbolizing love, joy, and the divine play (Leela) of Lord Krishna.

📿 Ritual Worship – Special pujas are performed in temples where Radha and Krishna are adorned with flowers, new clothes, and ornaments. Offerings of sweets and fruits are made.

🥁 Cultural Celebrations – Traditional music, kirtans, and dance performances bring communities together, celebrating both spirituality and festivity.

✨ Dola Purnima represents the bond of love and devotion between Radha and Krishna, spreading joy, harmony, and togetherness among devotees.`
},
    {
      name: "Kartika Purnima",
      category: "Kartika Purnima",
      image: kartikaPurnimaImg,
      description:
        `Kartika Purnima is one of the holiest days in the Hindu calendar, celebrated on the full moon day of the Kartika month. It marks the conclusion of the sacred Kartika Masa, which is considered highly auspicious for spiritual practices and devotion.

🪔 Ritual Bath & Worship – Devotees take holy dips in rivers or ponds early in the morning, believed to cleanse sins and bring divine blessings. Special pujas are offered to Lord Shiva and Lord Vishnu.

🌟 Lighting of Lamps – The festival is also called “Boita Bandana” in Odisha, where people float small boats made of banana bark or paper with lamps and diyas, commemorating ancient maritime traditions.

📿 Fasting & Charity – Many devotees observe fasting, offer food to the needy, and engage in acts of charity, as Kartika Masa is known as the month of devotion and spiritual upliftment.

🎶 Cultural Significance – Folk songs, devotional music, and temple rituals fill the atmosphere with spirituality and joy.

✨ Kartika Purnima is believed to bestow peace, prosperity, and liberation, making it one of the most sacred observances for devotees across Odisha and India.`
},
    {
      name: "Mahashivaratri",
      category: "Mahashivaratri",
      image: mahashivaratriImg,
      description:
        `Mahashivaratri, meaning "The Great Night of Shiva," is one of the most sacred festivals dedicated to Lord Shiva. It is celebrated with deep devotion, fasting, prayers, and night-long chanting of sacred mantras.

🕉️ Fasting & Vigil – Devotees observe strict fasts and stay awake throughout the night, performing prayers and meditations to seek Lord Shiva's blessings.

🌺 Rudrabhishekam & Puja – Special rituals like Rudrabhishekam, offering water, milk, and Bilva leaves to Shiva Lingam, are conducted in temples and homes.

📿 Chanting & Meditation – Devotees chant "Om Namah Shivaya" and meditate to attain spiritual growth, inner peace, and liberation from sins.

🎶 Cultural & Temple Events – Temples are decorated with flowers and lights, and devotional music and bhajans fill the atmosphere, creating a spiritually uplifting experience.

✨ Mahashivaratri symbolizes the victory of light over darkness and ignorance, and is believed to bring prosperity, divine blessings, and spiritual awakening to all devotees.`
},
    {
      name: "Pausha Purnima",
      category: "Pausha Purnima",
       image: paushaPurnimaImg,
      description:
       `Pausha Purnima is celebrated on the full moon day of the Pausha month and is considered highly auspicious for spiritual practices and devotion.
🪔 Holy Dips & Worship – Devotees take sacred baths in rivers or ponds early in the morning, believed to cleanse sins and invite divine blessings. Special pujas are offered to deities to seek prosperity and peace.
📿 Fasting & Charity – Many observe fasting and engage in charitable acts, such as distributing food and essentials to the needy, emphasizing devotion and generosity.
🌟 Lighting & Rituals – Lamps are lit in homes and temples, and rituals are performed with offerings of flowers, fruits, and sweets.
🎶 Cultural & Spiritual Activities – Devotional songs, bhajans, and temple ceremonies fill the day with a spiritually uplifting atmosphere.
✨ Pausha Purnima is believed to bestow peace, prosperity, and spiritual merit, making it a revered occasion for devotees across India.`
}
  ];
  
  const filteredFestivals =
    filter === "All" ? festivals : festivals.filter((f) => f.category === filter);
   
  return (
    <div>
        <section className="festivals">
    <img className="flower-bg1" src={flowerPattern} alt="diya-image"/>
     <img className="flower-bg2" src={flowerPattern} alt="diya-image"/>
  <h2>ॐ Our Festival Pujas ॐ</h2>
  {/* Buttons */}
  <div className="festival-buttons">
    {["All", "Bada Osha", "Dola Purnima", "Kartika Purnima", "Mahashivaratri", "Pausha Purnima"].map(
      (btn) => (
        <button
          key={btn}
          className={filter === btn ? "active" : ""}
          onClick={() => setFilter(btn)}
        >
          {btn}
        </button>
      ))}
  </div>
  {/* Festival Cards */}
  <div className="card-container">
    {filteredFestivals.map((f) => (
    <div className="card" key={f.name}>
  <img src={f.image} alt={f.name} className="festival-img" />
  <h3><FaPrayingHands/> {f.name}</h3>
  <p>{f.description.split(".")[0]}...</p>
  <button onClick={() => setSelectedFestival(f)}>
    View Details
  </button>
</div>

    ))}
  </div>
</section>
{/* Festival Modal */}
      {selectedFestival && (
        <div className="modal" onClick={() => setSelectedFestival(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedFestival(null)}>
              &times;
            </span>
            <h2>{selectedFestival.name}</h2>
            <p>{selectedFestival.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ourfestival