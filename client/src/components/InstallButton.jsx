import React, { useState, useEffect } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if the app is already installed
    const checkIfAppInstalled = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      setIsAppInstalled(isStandalone);
    };

    checkIfAppInstalled();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setIsAppInstalled(true);
    }
  };

  // Hide the button if the app is already installed
  if (isAppInstalled) {
    return null;
  }

  return (
    <button
    onClick={handleInstallClick}
    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center space-x-2 fixed bottom-4 right-4 z-50"
    style={{
      display: deferredPrompt ? 'flex' : 'none'
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  </button>
  );
};

export default InstallButton;