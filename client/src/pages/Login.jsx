import { auth, googleProvider, facebookProvider, signInWithPopup } from "../components/firebase";
import { useNavigate } from 'react-router-dom';
import { Chrome, Facebook } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  // Firebase authentication handlers
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigate('/');
      console.log("Logged in as:", user.displayName);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      navigate('/');
      console.log("Logged in as:", user.displayName);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Main Content */}
      <main className="flex-grow px-4 py-8 flex items-center justify-center">
        {/* Single Authentication Card */}
        <div className="bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Sign In</h2>
            <p className="text-gray-300">
              Access your Learn CE account to continue your computer engineering education journey
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-gray-100 py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Chrome className="w-5 h-5 text-cyan-400" />
              Continue with Google
            </button>

            {/* <button
              onClick={signInWithFacebook}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-gray-100 py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Facebook className="w-5 h-5 text-cyan-400" />
              Continue with Facebook
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;