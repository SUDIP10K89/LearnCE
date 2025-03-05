import { useState } from "react";
import axios from "axios";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter a valid email");

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://learnce.onrender.com/api/subscribers/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Stay Updated</h2>
        <p className="text-gray-500 mb-8">Subscribe to our newsletter for the latest resources and feature updates</p>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-grow px-4 py-3 rounded-l-full border border-purple-500 focus:outline-none text-gray-600"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-tl from-blue-500 to-purple-500 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-4 text-gray-600">{message}</p>}
      </div>
    </section>
  );
};

export default Subscribe;
