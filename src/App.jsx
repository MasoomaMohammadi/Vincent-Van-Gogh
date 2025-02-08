import Home from "./compounend/home/Home";
import About from "./compounend/about/About";
import Artist from "./compounend/artist/Artist";
import Footer from "./compounend/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      {/* hero */}
      <Home />
      {/* about */}
      <About />
      {/* artist */}
      <Artist/>
      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
