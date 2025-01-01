import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../AuthContext';

const MarkAssignment = () => {
    const submitData = useLoaderData()
    const navigate = useNavigate();
    const { user } = useAuth();
    const maxMarks = parseInt(submitData?.marks); // Convert string to integer
    const handleSubmit = async (e) => {
        e.preventDefault();
        const marks = parseInt(e.target.marks.value);
        const feedback = e.target.feedback.value;
        const status = "completed";
        const value = { marks, feedback, status };
        
        // Mark validation user cannot given marks greater than assignment total marks
        if (marks > maxMarks) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Marks',
                text: `Marks cannot exceed the maximum allowed: ${maxMarks}`,
                confirmButtonText: 'OK'
            });
            return;
        }

        // user validation mark for his own assignment
        if (user.email !== submitData.createdBy) {
            Swal.fire({
                icon: 'warning',
                title: 'Action Denied',
                text: 'You cannot mark your own assignment.',
                confirmButtonText: 'OK'
            });
        } else {
            axios.put(`http://localhost:5000/submitAssignment/${submitData._id}`, value, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Marks Submitted Successfully!',
                        text: 'The assignment has been marked and updated.',
                        confirmButtonText: 'OK',
                        timer: 3000
                    });
                    navigate('/pending');
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Submit Marks',
                        text: 'There was an error updating the assignment.',
                        confirmButtonText: 'Try Again'
                    });
                });


        }



    };
    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Mark Assignment</h2>

            <div className="mb-4">
                <p><strong>Title:</strong> {submitData.title}</p>
                <p><strong>Notes:</strong> {submitData.quickNote}</p>
                <p><strong>Submitted by:</strong> {submitData.submittedBy}</p>

                <a href={submitData.googleDocsLink} target="_blank" rel="noopener noreferrer">
                    <button className="text-white btn bg-blue-300">View Google Doc</button>
                </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium" htmlFor="marks">Marks:</label>
                    <input
                        type="number"
                        id="marks"
                        name="marks"
                        className="mt-2 p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium" htmlFor="feedback">Feedback:</label>
                    <textarea
                        name='feedback'
                        id="feedback"
                        className="mt-2 p-2 border rounded w-full"
                        rows="4"
                        required
                    />
                </div>

                <div>
                    <button type="submit" className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Submit Marks
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MarkAssignment;