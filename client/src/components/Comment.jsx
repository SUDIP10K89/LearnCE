import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sparsa",
      date: "February 25, 2025",
      text: "The Data Structures course was incredibly helpful. The visualization tools made complex concepts much easier to understand.",
      replies: []
    },
    {
      id: 2,
      name: "Hari Prasad",
      date: "February 24, 2025",
      text: "I appreciate how the algorithm analysis section breaks down time complexity. It has made a huge difference in my coding interviews!",
      replies: [
        {
          id: 21,
          name: "Rita",
          date: "February 24, 2025",
          text: "Totally agree! The Big O notation explanations are the clearest I have found anywhere."
        }
      ]
    }
  ]);
  
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;
    
    const newCommentObj = {
      id: comments.length + 1,
      name: userName,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      text: newComment,
      replies: []
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    if (!replyText.trim() || !userName.trim()) return;
    
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              name: userName,
              date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
              text: replyText
            }
          ]
        };
      }
      return comment;
    });
    
    setComments(updatedComments);
    setReplyingTo(null);
    setReplyText("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center ">Community Discussion</h2>
      
      {/* Comment form */}
      <form onSubmit={handleCommentSubmit} className="mb-10">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Share your thoughts or questions..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-32"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg transition-transform hover:scale-105"
        >
          Post Comment
        </button>
      </form>
      
      {/* Comments list */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {comment.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{comment.name}</h3>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.text}</p>
                <button
                  onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  className="text-sm font-medium text-purple-600 hover:text-purple-800"
                >
                  Reply
                </button>
                
                {/* Reply form */}
                {replyingTo === comment.id && (
                  <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="mt-4 pl-4 border-l-2 border-purple-200">
                    <div className="mb-3">
                      <textarea
                        placeholder="Write your reply..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg"
                      >
                        Post Reply
                      </button>
                      <button
                        type="button"
                        onClick={() => setReplyingTo(null)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
                
                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-4">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {reply.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-semibold text-gray-800 text-sm">{reply.name}</h4>
                            <span className="text-xs text-gray-500">{reply.date}</span>
                          </div>
                          <p className="text-gray-700 text-sm">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;