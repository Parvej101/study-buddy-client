import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PendingAssignment = () => {
    const pendingAssignment = useLoaderData()
    const navigate = useNavigate();

    const handleGiveMark = (assignmentId) => {
        navigate(`/markAssignment/${assignmentId}`);
    };

    // console.log(pendingAssignment);
    return (
        <div className="lg:px-32 pt-20 min-h-screen mb-4">
            <h1 className="text-2xl px-5 font-bold mb-6">Pending Assignments</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pendingAssignment.map((assignment) => (
                    <div key={assignment._id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{assignment.title}</h2>

                        {/* Display Assignment Marks */}
                        <p className="text-sm text-gray-600 mb-2">
                            Marks: {assignment.marks}
                        </p>

                        {/* Display Examinee Name */}
                        <p className="text-sm text-gray-600 mb-2">
                            Submitted by: {assignment.user}
                        </p>

                        {/* "Give Mark" Button */}
                        <button
                            onClick={() => handleGiveMark(assignment._id)}
                            className="mt-3 px-4 py-2  btn btn-outline hover:bg-blue-500 text-black rounded "
                        >
                            Give Mark
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingAssignment;