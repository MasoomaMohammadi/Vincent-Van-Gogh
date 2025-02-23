import van2 from "../../assets/images/file-2md184TJM4iM6xCDGQDQCS.webp";
import './About.css';

function About() {
  return (
    <>
      <div
        id="about"
        className="about flex sm:flex-col md:flex-col lg:flex-row justify-between gap-36 text-white bg-[#1a1919] p-34"
      >
        <div>
          <img
            src={van2}
            alt="img"
            className="imgb max-h-96 max-w-96 opacity-70"
          />
        </div>
        <div>
          <h1 className="tb text-5xl md:text-4xl lg:text-5xl text-[#d4c1c1]">
            ABOUT VINCENT
          </h1>
          <hr className="hrb my-5 mr-70 md:mr-58 lg:mr-50 text-[#938787]" />
          <p className="text-xl text-[#7a7777]">
            Vincent van Gogh (1853–1890) was a Dutch Post-Impressionist painter
            who had a profound impact on modern art. During his lifetime, he
            created over 2,100 artworks, including 860 oil paintings. Some of
            his most famous works include The Starry Night, Sunflowers, and The
            Bedroom in Arles. Van Gogh's life was marked by poverty, mental
            illness, and hardships. In his later years, he suffered from severe
            depression and ultimately took his own life at the age of 37.
            However, after his death, he became one of the most influential
            artists in history.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
