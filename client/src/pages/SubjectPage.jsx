import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

export const subjects = {
    1: ["Engineering Mathematics I", "Computer Programming", "Engineering Drawing", "Fundamentals of Electrical and Electronics Engineering", "Engineering Physics", "Engineering Workshop"],
    2: ["Engineering Mathematics II", "Object Oriented Programming", "Digital Logic", "Electronic Devices and Circuits", "Engineering Chemistry", "Electrical Circuits and Machines"],
};

const SubjectPage = () => {
    const { semId } = useParams();
    const navigate = useNavigate();

    // Icons mapping for subjects (you can customize these)
    const getSubjectIcon = (subject) => {
        if (subject.includes("Mathematics")) return "📐";
        if (subject.includes("Programming")) return "💻";
        if (subject.includes("Drawing")) return "✏️";
        if (subject.includes("Electronics")) return "⚡";
        if (subject.includes("Physics")) return "🔬";
        if (subject.includes("Workshop")) return "🛠️";
        if (subject.includes("Chemistry")) return "⚗️";
        if (subject.includes("Logic")) return "🔄";
        if (subject.includes("Circuits")) return "🔌";
        return "📚";
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg mb-8">
                <h1 className="text-3xl font-bold text-center">
                    Semester {semId}
                </h1>
                <p className="text-center mt-2 text-blue-100">
                    Select a subject to explore resources
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects[semId] ? (
                    subjects[semId].map((subject, index) => (
                        <div
                            key={subject}
                            onClick={() => navigate(`/semesters/${semId}/subjects/${index + 1}`)}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all 
                                     cursor-pointer transform hover:-translate-y-1 overflow-hidden
                                     border border-gray-100"
                        >
                            <div className="p-6 flex items-center space-x-4">
                                <div className="text-3xl">
                                    {getSubjectIcon(subject)}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                        {subject}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Click to view resources
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center p-8 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-lg">No Subjects Found</p>
                        <p className="text-gray-500 mt-2">Please select a different semester</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubjectPage;