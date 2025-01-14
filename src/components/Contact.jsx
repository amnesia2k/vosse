import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const { name, email, message } = form.elements;

    if (!name.value || !email.value || !message.value) {
      toast.error("All fields are required!");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Email sent successfully!");
      form.reset();
    } catch (error) {
      toast.error(`Error: ${error.text || "Something went wrong!"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-[#c5a880] text-3xl md:text-4xl font-bold text-center mb-5">
          Contact Us
        </h2>
        <div className="max-w-3xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
                required
              />
            </div>

            <div>
              <Button
                variant="ghost"
                type="submit"
                className={`w-[40%] block mx-auto rounded-md text-white ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 hover:text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
