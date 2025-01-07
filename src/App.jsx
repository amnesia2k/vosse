import { Toaster } from "sonner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Vossé</title>
        <meta
          name="description"
          content="Discover Vossé, where exceptional service and efficiency redefine real estate. We specialize in helping homeowners secure the best deals with seamless sales. Partner with us for tailored, results-driven solutions that maximize value and minimize stress."
        />
        <meta
          name="keywords"
          content="Vossé, real estate, seamless sales, homeowners, tailored solutions, exceptional service"
        />
        <meta name="author" content="Vossé" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vossé" />
        <meta
          property="og:description"
          content="Discover Vossé, where exceptional service and efficiency redefine real estate. We specialize in helping homeowners secure the best deals with seamless sales. Partner with us for tailored, results-driven solutions that maximize value and minimize stress."
        />
        <meta property="og:url" content="https://vosse.ca/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/android-chrome-512x512.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vossé" />
        <meta
          name="twitter:description"
          content="Discover Vossé, where exceptional service and efficiency redefine real estate. We specialize in helping homeowners secure the best deals with seamless sales. Partner with us for tailored, results-driven solutions that maximize value and minimize stress."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/android-chrome-512x512.png"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Toaster richColors position="top-right" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
