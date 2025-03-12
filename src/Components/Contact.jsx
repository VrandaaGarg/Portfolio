import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("mvgkovyl");

  return (
    <div className="mb-24">
      <h1 className="text-5xl text-center mb-9 mt-36 font-semibold text-[#FFC20D]">
        Lets's Contact
      </h1>
      <div className="flex justify-center items-center gap-4 mt-4 px-16">
        <div className="flex-1 flex justify-center items-center">
          <img src="/contact.webp" alt="image" className="h-80 w-fit" />
        </div>
        <div className="flex-1 bg-gradient-to-r from-[#FFD557] to-[#FFC20D] border-t-[#7886C7] rounded-lg mr-16 max-w-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col p-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-[#242424]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-3 mt-1 text-gray-900 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-[#242424]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-1 text-gray-900 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 rounded-md transition"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
