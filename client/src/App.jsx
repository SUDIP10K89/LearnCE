import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import SubjectDetailsPage from "./pages/SubjectDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/semesters" element={<SemesterPage />} />
          <Route path="/semesters/:semId" element={<SubjectPage />} />
          <Route path="/semesters/:semId/subjects/:subjectId" element={<SubjectDetailsPage />} />

        </Routes>
      
    </BrowserRouter>
  );
};

export default App;
