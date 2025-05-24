import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../components/firebase";
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubscribe = async () => {
    if (!user?.email) {
      setMessage("Please log in to subscribe");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };

      const payload = {
        email: user.email
      };

      console.log('Sending payload:', payload); // Debug log

      const response = await axios.post(
        "https://learnce.onrender.com/api/subscribers/subscribe",
        payload,
        config
      );

      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(`${error.response.data.message || 'Bad Request'}`);
      } else if (error.request) {
        setMessage("Network error: No response from server");
      } else {
        setMessage("Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:px-50 py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">Stay Updated</h2>
        <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest resources and feature updates</p>

        <div className="max-w-md mx-auto">
          <button
            onClick={handleSubscribe}
            className="bg-gray-800 text-cyan-400 px-6 py-3 rounded-full hover:bg-gray-700 hover:text-cyan-300 transition disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled={loading || !user}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        {message && (
          <p className={`mt-4 ${message.includes("Error") || message.includes("Bad Request") || message.includes("Network error") ? "text-red-500" : "text-cyan-400"}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;