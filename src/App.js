import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Services from "./Components/Services";
// import Tours from "./Components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Tours /> */}
      <Products />
      <Footer />
    </>
  );
}

export default App;
