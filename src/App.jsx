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
        <title>About Vossé - Redefining Real Estate Excellence</title>
        <meta
          name="description"
          content="Learn about Vossé, your trusted real estate partner. We redefine real estate with exceptional service, tailored solutions, and seamless sales. Your success is our success."
        />
        <meta
          name="keywords"
          content="Vossé, real estate, seamless sales, homeowners, tailored solutions, exceptional service"
        />
        <meta name="author" content="Vossé" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Vossé - Redefining Real Estate Excellence"
        />
        <meta
          property="og:description"
          content="Discover how Vossé redefines real estate with exceptional service and tailored solutions. Learn more about our seamless approach to buying and selling homes."
        />
        <meta property="og:url" content="https://vosse.ca/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/android-chrome-512x512.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Vossé - Redefining Real Estate Excellence"
        />
        <meta
          name="twitter:description"
          content="Learn about Vossé, your trusted real estate partner. We redefine real estate with exceptional service, tailored solutions, and seamless sales."
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
