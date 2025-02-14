import { useParams,useNavigate } from "react-router-dom"
import { subjects } from "./SubjectPage"

const SubjectDetailsPage = () => {
  const navigate = useNavigate();
    const {semId, subjectId} = useParams()
    const subjectName = subjects[semId][subjectId - 1]
  return (
    <div className="container mx-auto px-4 py-8 pt-30">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
            Semester - {semId} - {subjectName}
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10" >
        <div
        onClick={() => navigate(`/semesters/${semId}/subjects/${subjectId}/oldQ`)}
        className="bg-blue-500 h-60 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center"
      >
        <p>Old Question Papers</p>
      </div>
        <div
        onClick={() => navigate(`/semesters/${semId}/subjects/${subjectId}/practice`)}
        className="bg-blue-500 h-60 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center"
      >
        <p>Practice Books</p>
      </div>
        <div
        onClick={() => navigate(`/semesters/${semId}/subjects/${subjectId}/notes`)}
        className="bg-blue-500 h-60 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center "
      >
        <p>Slides And Notes</p>
      </div>

      </div>
    </div>
  )
}

export default SubjectDetailsPage
