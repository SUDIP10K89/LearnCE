import { useState, useEffect } from 'react';
import { auth } from "../components/firebase";
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login if not authenticated
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 mt-15">
      

      {/* Main Content */}
      <main className="flex-grow px-4 py-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">My Profile</h2>
          </div>

          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-white shadow">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-4xl font-bold text-gray-400">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 
                     user.email ? user.email.charAt(0).toUpperCase() : '?'}
                  </div>
                )}
              </div>
            </div>

            {/* User Information */}
            <div className="w-full space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Display Name</p>
                <p className="text-lg font-medium">{user.displayName || 'Not set'}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-lg font-medium">{user.email}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Provider</p>
                <p className="text-lg font-medium capitalize">
                  {user.providerData[0].providerId.replace('.com', '')}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Account Created</p>
                <p className="text-lg font-medium">
                  {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Unknown'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyProfile;