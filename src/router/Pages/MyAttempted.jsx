import React from 'react';
import { useAuth } from '../../AuthContext';
import { useLoaderData } from 'react-router-dom';

const MyAttempted = () => {
    const { user } = useAuth();
    const submitAssignment = useLoaderData();


    // Filter assignments for the logged-in user
    const filteredAssignments = submitAssignment.filter(
        (assignment) => assignment.user === user.email
    );

    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-xl font-semibold text-center mb-4">Assignment Overview</h1>
            <div className="w-full">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-2 text-left">Assignment Title</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Assignment Marks</th>
                            <th className="px-4 py-2 text-left">Your Marks</th>
                            <th className="px-4 py-2 text-left">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAssignments.map((assignment) => (
                            <tr key={assignment._id} className="border-b">
                                <td className="px-4 py-2">{assignment.title}</td>
                                <td className="px-4 py-2 capitalize">{assignment.status}</td>
                                <td className="px-4 py-2">{assignment.marks}</td>
                                <td className="px-4 py-2">
                                    {assignment.status === 'completed' ? assignment.obtainedMarks || 'N/A' : 'Pending'}
                                </td>
                                <td className="px-4 py-2 text-justify">
                                    {assignment.status === 'completed' ? assignment.feedback || 'No feedback' : 'Pending'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAttempted;
