import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../AuthContext';

const UpdateAssignment = () => {
    const assignment = useLoaderData()
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
        const updateAssignment = { title, description, marks, thumbnailURL, difficulty, dueDate, userName, createdBy }

        try {
            const response = await axios.put(`http://localhost:5000/assignment/${assignment._id}`, updateAssignment);
      
            if (response.status === 200) {
              Swal.fire("Success", "Assignment updated successfully!", "success");
              navigate("/allAssignment"); // Redirect to the list of assignments
            }
          } catch (error) {
            console.error("Error updating assignment:", error);
            Swal.fire("Error", "Failed to update the assignment.", "error");
          }
        };
    
      
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center">
        <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Update Assignment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={assignment?.title || ""}
                        placeholder="Enter assignment title"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
    
                {/* Description */}
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        defaultValue={assignment?.description || ""}
                        placeholder="Enter assignment description"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
    
                {/* Marks */}
                <div>
                    <label className="block font-medium">Marks</label>
                    <input
                        type="number"
                        name="marks"
                        id="marks"
                        defaultValue={assignment?.marks || ""}
                        placeholder="Enter total marks"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
    
                {/* Thumbnail */}
                <div>
                    <label className="block font-medium">Thumbnail Image URL</label>
                    <input
                        type="url"
                        name="thumbnail"
                        id="thumbnail"
                        defaultValue={assignment?.thumbnailURL || ""}
                        placeholder="Enter thumbnail image URL"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
    
                {/* Difficulty Level */}
                <div>
                    <label className="block font-medium">Difficulty Level</label>
                    <select
                        name="difficulty"
                        id="difficulty"
                        defaultValue={assignment?.difficulty || "easy"}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
    
                {/* Due Date */}
                <div>
                    <label className="block font-medium">Due Date</label>
                    <DatePicker
                        selected={dueDate || new Date(assignment?.dueDate)}
                        name="dueDate"
                        onChange={(date) => setDueDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
    
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Update Assignment
                </button>
            </form>
        </div>
    </div>
    );
};

export default UpdateAssignment;