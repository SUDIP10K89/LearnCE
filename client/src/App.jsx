import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import SubjectDetailsPage from "./pages/SubjectDetailsPage";
import OldQuestions from "./pages/OldQuestions";
import PracticeBooks from "./pages/PracticeBooks";
import SlidesNotes from "./pages/SlidesNotes";

const App = () => {
  //Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful');
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semesters" element={<SemesterPage />} />
          <Route path="/semesters/:semId" element={<SubjectPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId" element={<SubjectDetailsPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId/oldQ" element={<OldQuestions />} />
          <Route path="/semesters/:semId/subjects/:subjectId/practice" element={<PracticeBooks />} />
          <Route path="/semesters/:semId/subjects/:subjectId/notes" element={<SlidesNotes />} />

        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
