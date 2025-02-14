import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateAssignment = () => {
    const navigate = useNavigate();
    const {user} = useAuth()
    const [dueDate, setDueDate] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const marks = e.target.marks.value;
        const thumbnailURL = e.target.thumbnail.value;
        const difficulty = e.target.difficulty.value;
        const dueDate = e.target.dueDate.value;
        const userName = user?.displayName;
        const createdBy = user?.email;
        const status = "Pending";
        const newAssignment = { title, description, marks, thumbnailURL, difficulty, dueDate, userName, createdBy, status }

         // Using axios
        try {
            const response = await axios.post('https://study-buddy-server-omega.vercel.app/assignment', newAssignment);
            if (response.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Assignment Created!",
                    text: "Your assignment has been added successfully.",
                    timer: 2000,
                    showConfirmButton: false,
                    background: "#f0f9ff",
                    color: "#0c4a6e",
                });
                navigate('/allAssignment');
            }
        } catch (error) {
            console.error('Error creating assignment:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong while creating the assignment.",
                footer: `<a href="https://support.example.com">Need help?</a>`,
                confirmButtonColor: "#d33",
            });
        }
    };
   


    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center">
            <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Create New Assignment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter assignment title"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Enter assignment description"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Marks */}
                    <div>
                        <label className="block font-medium">
                            Marks
                        </label>
                        <input
                            type="number"
                            name="marks"
                            id="marks"
                            placeholder="Enter total marks"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <label className="block font-medium">
                            Thumbnail Image URL
                        </label>
                        <input
                            type="url"
                            name="thumbnail"
                            id="thumbnail"
                            placeholder="Enter thumbnail image URL"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Difficulty Level */}
                    <div>
                        <label className="block font-medium">
                            Difficulty Level
                        </label>
                        <select
                            name="difficulty"
                            id="difficulty"

                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block font-medium">
                            Due Date
                        </label>
                        <DatePicker
                            selected={dueDate}
                            name='dueDate'
                            onChange={(date) => setDueDate(date)}
                            dateFormat="yyyy-MM-dd"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2  btn btn-outline text-black hover:bg-blue-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Create Assignment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;