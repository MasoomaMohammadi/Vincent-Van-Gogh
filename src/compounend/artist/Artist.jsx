import { useState } from "react";
import svgL from "../../assets/images/arrow-left-square-fill.svg";
import svgR from "../../assets/images/arrow-right-square-fill.svg";
import './Artist.css';

// imgs (these imports should stay where the images are coming from)
import van1 from "../../assets/images/gettyimages-640482749-612x612.jpg";
import van2 from "../../assets/images/download (2).jpeg";
import van3 from "../../assets/images/download (3).jpeg";
import van4 from "../../assets/images/download (4).jpeg";
import van5 from "../../assets/images/download (5).jpeg";
import van6 from "../../assets/images/download (6).jpeg";
import van7 from "../../assets/images/download (7).jpeg";
import van8 from "../../assets/images/download (1).jpeg";
import van9 from "../../assets/images/downloadooooooo.jpeg";
import van10 from "../../assets/images/download.jpeg";
import van11 from "../../assets/images/images (1).jpeg";
import van12 from "../../assets/images/images (2).jpeg";
import van13 from "../../assets/images/images (3).jpeg";
import van14 from "../../assets/images/images (4).jpeg";
import van15 from "../../assets/images/images (5).jpeg";
import van16 from "../../assets/images/images (6).jpeg";
import van17 from "../../assets/images/images (7).jpeg";
import van18 from "../../assets/images/images (8).jpeg";
import van19 from "../../assets/images/images (9).jpeg";
import van20 from "../../assets/images/images (10).jpeg";
import van21 from "../../assets/images/images (11).jpeg";
import van22 from "../../assets/images/images.jpeg";
import van23 from "../../assets/images/gettyimages-919781452-612x612.jpg";
import van24 from "../../assets/images/gettyimages-179981774-612x612.jpg";
import van25 from "../../assets/images/gettyimages-523846044-612x612.jpg";
import van26 from "../../assets/images/gettyimages-544228456-612x612.jpg";
import van27 from "../../assets/images/gettyimages-544265232-612x612.jpg";
import van28 from "../../assets/images/gettyimages-902945752-612x612.jpg";
import van29 from "../../assets/images/images (12).jpeg";
import van30 from "../../assets/images/images (13).jpeg";

// The images array can be defined outside the Artist component and passed as a prop
const vanImg = [
  { id: 1, img: van1 },
  { id: 2, img: van2 },
  { id: 3, img: van3 },
  { id: 4, img: van4 },
  { id: 5, img: van5 },
  { id: 6, img: van6 },
  { id: 7, img: van7 },
  { id: 8, img: van8 },
  { id: 9, img: van9 },
  { id: 10, img: van10 },
  { id: 11, img: van11 },
  { id: 12, img: van12 },
  { id: 13, img: van13 },
  { id: 14, img: van14 },
  { id: 15, img: van15 },
  { id: 16, img: van16 },
  { id: 17, img: van17 },
  { id: 18, img: van18 },
  { id: 19, img: van19 },
  { id: 20, img: van20 },
  { id: 21, img: van21 },
  { id: 22, img: van22 },
  { id: 23, img: van23 },
  { id: 24, img: van24 },
  { id: 25, img: van25 },
  { id: 26, img: van26 },
  { id: 27, img: van27 },
  { id: 28, img: van28 },
  { id: 29, img: van29 },
  { id: 30, img: van30 },
];

function Artist() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vanImg.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vanImg.length);
  };

  return (
    <div id="artist" className="text-center justify-center p-20 artist1">
      <h1 className="text-[#d4c1c1] text-3xl mb-16">ARTISTS</h1>
      <div className="flex justify-around artist">
        <img
          src={svgL}
          alt="left-arrow"
          className="cursor-pointer hover:scale-95 decoration-[2000ms] transition-transform"
          onClick={prevSlide} // Corrected to go to the previous image
        />
        <img
          src={vanImg[currentIndex].img}
          alt={`Image ${vanImg[currentIndex].id}`}
          className="imga md:h-80 md:w-96 hover:scale-105 decoration-[2000ms] transition-transform rounded-sm"
        />
        <img
          src={svgR}
          alt="right-arrow"
          className="cursor-pointer hover:scale-95 decoration-[2000ms] transition-transform"
          onClick={nextSlide} // Corrected to go to the next image
        />
      </div>
    </div>
  );
}

export default Artist;
