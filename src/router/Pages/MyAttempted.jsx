import React from 'react';
import { useAuth } from '../../AuthContext';
import { useLoaderData } from 'react-router-dom';


const MyAttempted = () => {
    const { user } = useAuth();
    const submitAssignment = useLoaderData()
    console.log(submitAssignment);
    return (
        submitAssignment.map((assignment) => {
            if (assignment.user === user.email)  {
                return (
                    <div className="overflow-x-auto p-4">
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="px-4 py-2 text-left">Assignment Title</th>
                                    <th className="px-4 py-2 text-left">Marks</th>
                                    <th className="px-4 py-2 text-left">Quick Note</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submitAssignment.map((assignment) => {
                                    if (assignment.user === user.email) {
                                        return (
                                            <tr key={assignment._id} className="border-b">
                                                <td className="px-4 py-2">{assignment.title}</td>
                                                <td className="px-4 py-2">{assignment.marks}</td>
                                                <td className="px-4 py-2 capitalize">{assignment.quickNote}</td>
                                                <td className="px-4 py-2">
                                                    {assignment.status}
                                                </td>
                                                <td className="px-4 py-2 text-justify">{assignment.description}</td>
                                            </tr>
                                        );
                                    }
                                    
                                })}
                            </tbody>
                        </table>
                    </div>
                );
            }
           
        })
    );
};

export default MyAttempted;