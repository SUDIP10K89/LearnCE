import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp, Award, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChallengeInfo = ({ post, user }) => {
    if (!post || !user) return null; 
  const [showMenu, setShowMenu] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const menuRef = useRef(null);

  const isOwner = post.email === user.email;
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const token = localStorage.getItem("token");

  const handleUpdate = async () => {
    navigate(`/askquestion/${post._id}`);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/posts/${post._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.status === "success") {
        navigate("/discussion");
      }
    } catch (error) {
      console.error("Error Deleting", error);
    }
  };

  const handleLikeToggle = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/posts/${post._id}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setIsLiked((prev) => !prev);
      setVoteCount((prev) => prev + (isLiked ? -1 : 1));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (post.likes?.includes(user.reloadUserInfo.localId)) {
      setIsLiked(true);
    }
    setVoteCount(post.likes?.length || 0);
  }, [post.likes, user.reloadUserInfo.localId]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-700 relative"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-100">
          {post.author?.charAt(0) || "U"}
        </div>
        <span className="text-gray-100 font-medium">
          {post.author || "Unknown Creator"}
        </span>
      </div>

      {isOwner && (
        <div className="absolute top-4 right-4 z-20" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
          >
            <MoreVertical className="w-5 h-5" />
          </button>
          {showMenu && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="absolute right-0 mt-2 w-48 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-30"
            >
              <div className="py-1">
                <button
                  onClick={handleUpdate}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-100 hover:bg-gray-600"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-600"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}

      <div className="border-l-4 border-cyan-400 pl-6">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold text-gray-100">{post.title}</h2>
        </div>

        <p className="text-gray-300 mb-4">
          <span className="font-bold text-gray-100">Description: </span>
          {post.content}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLikeToggle}
          className={`p-2 rounded-full flex items-center justify-center cursor-pointer ${
            isLiked ? "text-cyan-400" : "text-gray-300"
          } hover:text-cyan-400 focus:outline-none transition-colors`}
          aria-label="Like"
        >
          <ThumbsUp
            className="w-6 h-6"
            fill={isLiked ? "currentColor" : "none"}
            stroke={isLiked ? "currentColor" : "currentColor"}
          />
        </motion.button>
        <span className="text-gray-100 font-medium">+ {voteCount}</span>
      </div>
    </motion.div>
  );
};

export default ChallengeInfo;
