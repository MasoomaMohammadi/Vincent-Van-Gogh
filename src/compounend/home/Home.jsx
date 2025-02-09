import van from "../../assets/images/InShot_۲۰۲۵۰۲۰۶_۱۰۴۲۲۴۶۲۹.png";
import './Home.css';

function Home() {
  return (
    <>
      <div className="homec">
        <header className="header text-[#d4c1c1] flex justify-center gap-30 mt-6 text-2xl">
          <a
            className="hover:text-[#f8dd71] hover:scale-105 decoration-[2000ms] transition-transform"
            href="#home"
          >
            HOME
          </a>
          <a
            className="hover:text-[#f8dd71] hover:scale-105 decoration-[2000ms] transition-transform"
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="hover:text-[#f8dd71] hover:scale-105 decoration-[2000ms] transition-transform"
            href="#artist"
          >
            ARTISTS
          </a>
        </header>
        <div
          id="home"
          className="flex sm:flex-col-reverse md:flex-row lg:flex-row justify-around my-20 home sm:p-20 md:px-8"
        >
          <div className="mt-24">
            <p className="text-[#7a7777]">Who is Vincent Van Gogh?</p>
            <h1 className="text-[#d4c1c1] h1h text-5xl mt-2">
              He is a PAINTER 🎨
            </h1>
            <div className="space-x-8">
              <button className="text-[#fff] bg-[#7a7777] mt-12 px-7 py-2 hover:scale-95 hover:text-[#f8dd71] decoration-[2000ms] transition-transform">
                <a href="#about">Vincent</a>
              </button>
              <button className="text-[#d4c1c1] hover:scale-95 hover:text-[#f8dd71] decoration-[2000ms] transition-transform">
                <a href="https://www.biography.com/artist/vincent-van-gogh">
                  More info
                </a>
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={van}
              alt="img"
              className="imgh h-90 w-90 rounded-full opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
