import { useParams ,useNavigate } from "react-router-dom"

 export const subjects = {
    1: ["Engineering Mathematics I","Computer Programming","Engineering Drawing","Fundamentals of Electrical and Electronics Engineering","Engineering Physics","Engineering Workshop"],
    2: ["Engineering Mathematics II","Object Oriented Programming","Digital Logic","Electronic Devices and Circuits","Engineering Chemistry","Electrical Circuits and Machines"],
    3:[]
}

const SubjectPage = () => {

    const {semId} = useParams()
    const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
      Subjects for Semester {semId}
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {subjects[semId] ? (
        subjects[semId].map((subject, index) => (
          <button 
            key={subject}
            onClick={() => navigate(`/semesters/${semId}/subjects/${index + 1}`)}
            className="bg-blue-500 h-16 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {subject}
          </button>
        ))
      ) : (
        <p className="text-center text-gray-600 col-span-full">No Subjects Found</p>
      )}
    </div>
  </div>
  )
}

export default SubjectPage
