import van2 from "../../assets/images/file-2md184TJM4iM6xCDGQDQCS.webp";
import './About.css';

function About() {
  return (
    <>
      <div
        id="about"
        className="about flex md:flex-col sm:flex-col justify-between gap-36 lg:gap-20 text-white bg-[#1a1919] p-34"
      >
        <div>
          <img src={van2} alt="img" className="imgb max-h-96 max-w-96 opacity-70" />
        </div>
        <div>
          <h1 className="tb text-5xl lg:text-3xl md:text-4xl text-[#d4c1c1]">ABOUT VINCENT</h1>
          <hr className="hrb my-5 mr-70 lg:mr-18 md:mr-58 text-[#938787]" />
          <p className="text-xl lg:text-base text-[#7a7777]">
            Vincent van Gogh, a Dutch Post-Impressionist painter, was born on
            March 30, 1853. He created iconic works like Starry Night and
            Sunflowers using vibrant colors and bold brushstrokes. Van Gogh
            struggled with severe mental health issues throughout his life and
            created most of his works in the last two years of his life. He
            passed away on July 29, 1890, at the age of 37 from a gunshot wound.
            His works gained recognition after his death, and he is now
            considered one of the most influential painters in art history.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
