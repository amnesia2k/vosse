// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "sonner";

// const Contact = () => {
//   const formRef = useRef();
//   const [formStatus, setFormStatus] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_6z5l2yk", "template_230oa9j", formRef.current, {
//         publicKey: "zvrKXtA-pT3feXRYp",
//       })
//       .then(
//         () => {
//           setFormStatus({
//             success: true,
//             message: "Message sent successfully!",
//           });
//           formRef.current.reset();
//           toast.success("Email sent successfully!");
//         },
//         (error) => {
//           setFormStatus({ success: false, message: "Failed to send message." });
//           toast.error(error);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-16 md:py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
//           Contact Us
//         </h2>
//         <div className="max-w-3xl mx-auto">
//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//           {formStatus && (
//             <div
//               className={`mt-4 p-4 rounded-md ${
//                 formStatus.success
//                   ? "bg-green-100 text-green-700"
//                   : "bg-red-100 text-red-700"
//               }`}
//             >
//               {formStatus.message}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with the public key
  emailjs.init("zvrKXtA-pT3feXRYp");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const { name, email, message } = form.elements;

    // Basic validation
    if (!name.value || !email.value || !message.value) {
      toast.error("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null); // Reset form status

    try {
      await emailjs.sendForm(
        "service_6z5l2yk",
        "template_230oa9j",
        formRef.current
      );
      setFormStatus({
        success: true,
        message: "Message sent successfully!",
      });
      toast.success("Email sent successfully!");
      form.reset();
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
      toast.error(`Error: ${error.text || "Something went wrong!"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
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
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md text-white ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          {formStatus && (
            <div
              className={`mt-4 p-4 rounded-md ${
                formStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
              aria-live="polite"
            >
              {formStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;