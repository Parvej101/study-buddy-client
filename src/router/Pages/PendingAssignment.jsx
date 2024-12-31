import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PendingAssignment = () => {
    const pendingAssignment = useLoaderData()

    // console.log(pendingAssignment);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Pending Assignments</h1>

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
                            Submitted by: {assignment.userName}
                        </p>

                        {/* "Give Mark" Button */}
                        <button
                            // onClick={() => handleGiveMark(assignment._id)}
                            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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