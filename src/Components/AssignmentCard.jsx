import React from 'react';

const AssignmentCard = ({assignment}) => {
    const { _id, thumbnailURL, title, marks, difficulty } = assignment;
    return (
        <div
            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
        >
            <img
                src={thumbnailURL}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 truncate">{title}</h3>
                <p className="text-gray-500 mt-2">Marks: {marks}</p>
                <p className="text-gray-500 mt-2">Difficulty: {difficulty}</p>
                <div className="flex justify-between items-center mt-4">
                    <button
                        // onClick={handleView}
                        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        View
                    </button>
                    <button
                        // onClick={handleUpdate}
                        className="px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none"
                    >
                        Update
                    </button>
                    <button
                        // onClick={handleDelete}
                        className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;