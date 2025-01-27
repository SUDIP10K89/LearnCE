import { useParams } from "react-router-dom"
import { subjects } from "./SubjectPage"

const SubjectDetailsPage = () => {
    
    const {semId, subjectId} = useParams()
    const subjectName = subjects[semId][subjectId - 1]
  return (
    <div className="pt-30">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
            Semester - {semId} - {subjectName}
        </h1>
        <ul className="list-disc ml-6">
        <li>
          <a
            href={`/assets/semester-${semId}/${subjectName}-Book.pdf`}
            className="text-blue-500 underline hover:text-blue-700"
            download
          >
            Book PDF
          </a>
        </li>
        <li>
          <a
            href={`/assets/semester-${semId}/${subjectName}-Syllabus.pdf`}
            className="text-blue-500 underline hover:text-blue-700"
          >
            Syllabus PDF
          </a>
        </li>
      </ul>

    </div>
  )
}

export default SubjectDetailsPage
