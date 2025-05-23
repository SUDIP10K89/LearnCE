import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Ruler, Code, Pencil, Zap, FlaskConical, Wrench, Beaker, RefreshCw, Plug } from "lucide-react";

export const subjects = {
    1: ["Engineering Mathematics I", "Computer Programming", "Engineering Drawing", "Fundamentals of Electrical and Electronics Engineering", "Engineering Physics", "Engineering Workshop"],
    2: ["Engineering Mathematics II", "Object Oriented Programming", "Digital Logic", "Electronic Devices and Circuits", "Engineering Chemistry", "Electrical Circuits and Machines"],
    
};

const SubjectPage = () => {
    const { semId } = useParams();
    const navigate = useNavigate();

    // Icons mapping for subjects using Lucide React
    const getSubjectIcon = (subject) => {
        if (subject.includes("Mathematics")) return <Ruler size={32} className="text-cyan-400" />;
        if (subject.includes("Programming")) return <Code size={32} className="text-cyan-400" />;
        if (subject.includes("Drawing")) return <Pencil size={32} className="text-cyan-400" />;
        if (subject.includes("Electronics")) return <Zap size={32} className="text-cyan-400" />;
        if (subject.includes("Physics")) return <FlaskConical size={32} className="text-cyan-400" />;
        if (subject.includes("Workshop")) return <Wrench size={32} className="text-cyan-400" />;
        if (subject.includes("Chemistry")) return <Beaker size={32} className="text-cyan-400" />;
        if (subject.includes("Logic")) return <RefreshCw size={32} className="text-cyan-400" />;
        if (subject.includes("Circuits")) return <Plug size={32} className="text-cyan-400" />;
        return <FlaskConical size={32} className="text-cyan-400" />;
    };

    return (
        <div className="container min-w-full h-[100vh] overflow-auto mx-auto px-4 py-8 pt-16 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 p-8 rounded-lg mb-8">
                <h1 className="text-3xl font-bold text-center">
                    Semester {semId}
                </h1>
                <p className="text-center mt-2 text-gray-300">
                    Select a subject to explore resources
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects[semId] ? (
                    subjects[semId].map((subject, index) => (
                        <div
                            key={subject}
                            onClick={() => navigate(`/semesters/${semId}/subjects/${index + 1}`)}
                            className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all 
                                     cursor-pointer transform hover:-translate-y-1 overflow-hidden
                                     border border-gray-700"
                        >
                            <div className="p-6 flex items-center space-x-4">
                                <div className="text-3xl">
                                    {getSubjectIcon(subject)}
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold text-gray-100 mb-1">
                                        {subject}
                                    </h2>
                                    <p className="text-sm text-gray-300">
                                        Click to view resources
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center p-8 bg-gray-850 rounded-lg">
                        <p className="text-gray-100 text-lg">No Subjects Found</p>
                        <p className="text-gray-300 mt-2">Please select a different semester</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubjectPage;