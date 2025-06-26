import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ChallengeInfo from '../components/ChallengeInfo';
import AnswersList from '../components/AnswersList';
import AnswerFormModal from '../components/AnswerFormModal';

const SingleDiscussion = ({user}) => {
  const { id } = useParams();
  const [sortBy, setSortBy] = useState('Votes');
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answerText, setAnswerText] = useState('');
  const [charactersRemaining, setCharactersRemaining] = useState(2048);
  const [post, setPost] = useState({});
  const [answers,setaAnswers] = useState([])

  // const answers = [
  //   {
  //     id: 1,
  //     votes: 12,
  //     content: "just to make the ball roll:",
  //     link: "https://facebook.com",
  //     author: "Oma Falk",
  //     timestamp: "13th May 2025, 11:00 AM",
  //     avatar: "OF"
  //   },
  //   {
  //     id: 2,
  //     votes: 10,
  //     content: "",
  //     link: "https://youtube.com",
  //     author: "Angel",
  //     timestamp: "13th May 2025, 1:22 PM",
  //     avatar: "A"
  //   },
  //   {
  //     id: 3,
  //     votes: 9,
  //     content: "",
  //     link: "https://instagram.com",
  //     author: "жнец",
  //     timestamp: "14th May 2025, 12:25 PM",
  //     avatar: "Ж"
  //   },
  //   {
  //     id: 4,
  //     votes: 7,
  //     content: "It is a kind a code that takes your survey and will tell about your personality... Read the comments of code for better results!!",
  //     link: "https://x.com",
  //     author: "Aditi Shukla",
  //     timestamp: "13th May 2025, 2:53 PM",
  //     avatar: "AS"
  //   }
  // ];

  const getAnswers =async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/answers/${id}`)
      console.log("anserss",response.data.answers)
      setaAnswers(response.data.answers)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getSingleDiscussion = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/posts/${id}`
      );
      console.log('Single Discussion Data:', response.data.data.post);
      setPost(response.data.data.post);
    } catch (error) {
      console.error('Error fetching single discussion:', error);
    }
  };

  useEffect(() => {
    getSingleDiscussion();
    getAnswers();
  }, [id]);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto mt-25 p-4">
        <ChallengeInfo post={post} user={user} />
        <AnswersList 
          answers={answers} 
          sortBy={sortBy} 
          setSortBy={setSortBy} 
          setShowAnswerForm={setShowAnswerForm} 
        />
        <AnswerFormModal 
          showAnswerForm={showAnswerForm}
          setShowAnswerForm={setShowAnswerForm}
          answerText={answerText}
          setAnswerText={setAnswerText}
          charactersRemaining={charactersRemaining}
          setCharactersRemaining={setCharactersRemaining}
        />
      </div>
    </div>
  );
};

export default SingleDiscussion;

