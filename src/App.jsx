import { Toaster } from "sonner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Services from "./components/Services";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        {/* <Services /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
