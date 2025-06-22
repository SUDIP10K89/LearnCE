import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import SubjectDetailsPage from "./pages/SubjectDetailsPage";
import OldQuestions from "./pages/OldQuestions";
import PracticeBooks from "./pages/PracticeBooks";
import SlidesNotes from "./pages/SlidesNotes";
import Discussion from "./pages/Discussion";
import Login from "./pages/Login";
import InstallButton from "./components/InstallButton";
import MyProfile from "./pages/MyProfile";
import AskQuestionForm from "./pages/AskQuestionForm";
import SingleDiscussion from "./pages/SingleDiscussion"
import { useEffect, useState } from "react";

import { auth } from "./components/firebase";


const App = () => {
   const [user, setUser] = useState(null);

     useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  },[]);
  return (
    <div>
      <InstallButton/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyProfile />} />

          {/* resources route */}
          <Route path="/semesters" element={<SemesterPage />} />
          <Route path="/semesters/:semId" element={<SubjectPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId" element={<SubjectDetailsPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId/oldQ" element={<OldQuestions />} />
          <Route path="/semesters/:semId/subjects/:subjectId/practice" element={<PracticeBooks />} />
          <Route path="/semesters/:semId/subjects/:subjectId/notes" element={<SlidesNotes />} />
          

          {/* discussion */}
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/askquestion" element={<AskQuestionForm />} />
          <Route path="/askquestion/:id" element={<AskQuestionForm />} />
          <Route path="/singlequestion/:id"  element={<SingleDiscussion user={user} />} />

        </Routes>
    </div>
  );
};

export default App;
