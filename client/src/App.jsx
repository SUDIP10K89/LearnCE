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


const App = () => {
  return (
    <div>
      <InstallButton/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/semesters" element={<SemesterPage />} />
          <Route path="/semesters/:semId" element={<SubjectPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId" element={<SubjectDetailsPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId/oldQ" element={<OldQuestions />} />
          <Route path="/semesters/:semId/subjects/:subjectId/practice" element={<PracticeBooks />} />
          <Route path="/semesters/:semId/subjects/:subjectId/notes" element={<SlidesNotes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/askquestion" element={<AskQuestionForm />} />
          
        </Routes>
    </div>
  );
};

export default App;
