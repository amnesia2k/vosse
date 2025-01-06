const About = () => {
  return (
    <section id="about" className="pt-16 pb-5 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-[#c5a880] text-3xl md:text-4xl font-bold text-center mb-5">
          About Vossé
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/path-to-your-image.jpg"
              alt="About Vossé"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At Vossé, we are dedicated to redefining how you experience real
              estate. With a focus on exceptional service and efficiency, we
              specialize in helping homeowners secure the best deals while
              ensuring swift and seamless sales.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is simple: to provide a tailored, results-driven
              approach that aligns with your goals. Whether you&apos;re selling
              a cherished family home or exploring the market for the first
              time, our expert team works tirelessly to connect you with
              opportunities that maximize value and minimize stress.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We pride ourselves on combining market expertise with innovative
              strategies to deliver results that exceed expectations. By
              leveraging our deep industry insights and personalized solutions,
              we ensure every step of your journey with Vossé is smooth,
              transparent, and rewarding.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Vossé, your success is our success. Let us help you take the
              next step with confidence and ease.
            </p>
            <p className="text-xl font-semibold text-gray-800">
              Your goals, our commitment—together, we achieve more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
