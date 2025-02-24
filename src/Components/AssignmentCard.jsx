import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const AssignmentCard = ({ assignment }) => {
    const { _id, thumbnailURL, title, marks, difficulty, createdBy } = assignment;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        if (user.email !== createdBy) {
            Swal.fire('Error', 'You are not authorized to delete this assignment.', 'error');
            return;
        }

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://study-buddy-server-omega.vercel.app/assignment/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire('Deleted!', 'Your assignment has been deleted.', 'success');
                    navigate('/allAssignment');
                } else {
                    Swal.fire('Error', 'Failed to delete the assignment.', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to delete the assignment.', 'error');
            }
        }
    };
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
                   <Link to={`/assignmentDetails/${_id}`}>
                   <button
                        className="px-5  py-2 text-black btn btn-outline rounded-lg hover:bg-blue-500 focus:outline-none"
                    >
                        View
                    </button>
                   </Link>
                   <Link to={`/updateAssignment/${_id}`}>
                   <button  
                        className="px-4 py-2 text-black  btn btn-outline rounded-lg hover:bg-yellow-500 focus:outline-none"
                    >Update
                    </button>
                   </Link>

                    <button
                        onClick={() => {
                            handleDelete(_id)
                        }}
                        className="px-4 py-2 text-black  btn btn-outline rounded-lg hover:bg-red-500 focus:outline-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;