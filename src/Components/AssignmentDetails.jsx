import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AssignmentDetails = () => {
    const assignment = useLoaderData();
    
    // console.log(assignment);
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                {/* Header */}
                <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                    <h2 className="text-3xl font-bold text-center uppercase tracking-wide">
                        {assignment.title}
                    </h2>
                </div>

                {/* Main Content */}
                <div className="p-8 space-y-6">
                    {/* Thumbnail */}
                    <div className="w-full flex justify-center">
                        <img
                            src={assignment.thumbnailURL}
                            alt="Assignment Thumbnail"
                            className="w-64 h-40 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="text-blue-600 font-semibold">Description:</span>
                            </p>
                            <p className="text-gray-600 text-justify">{assignment.description}</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="text-blue-600 font-semibold">Marks:</span>
                            </p>
                            <p className="text-gray-600">{assignment.marks}</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="text-blue-600 font-semibold">Difficulty Level:</span>
                            </p>
                            <p className="text-gray-600 capitalize">{assignment.difficulty}</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="text-blue-600 font-semibold">Due Date:</span>
                            </p>
                            <p className="text-gray-600">
                                {new Date(assignment.dueDate).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-300 my-6" />

                    {/* Creator Information */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-600">Created By</h3>
                        <p className="text-lg">
                            <span className="text-blue-600 font-semibold">Name:</span> {assignment.userName}
                        </p>
                        <p className="text-lg">
                            <span className="text-blue-600 font-semibold">Email:</span> {assignment.createdBy}
                        </p>
                    </div>
                    {/* Take Assignment Button */}
                    <div className="flex justify-center mt-6">
                       <Link to="/takeAssignment" 
                       state={{ assignment }}>
                       <button
                            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Take Assignment
                        </button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;