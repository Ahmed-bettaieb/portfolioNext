export default function ContactPage() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Contact Title */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Contact Me
        </h1>

        {/* Contact Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          Feel free to reach out via email: <span className="text-pink-500">me@example.com</span>
        </p>

        {/* Contact Form */}
        <form className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 dark:text-white text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 dark:text-white text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 dark:text-white text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="w-full p-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-semibold text-lg rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

  