import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const TakeAssignment = () => {
  const location = useLocation()
  const { assignment } = location.state || {}; // Get assignment details from location state
  // console.log(assignment);
  const navigate = useNavigate();
  const {user} = useAuth();
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      const googleDocsLink = e.target.googleDocsLink.value;
      const quickNote = e.target.quickNote.value;
      const submission = {
        title: assignment.title,
        description: assignment.description,
        marks: assignment.marks,
        googleDocsLink,
        quickNote,
        status: "pending",
        submittedBy: assignment.createdBy,
        user : user?.email,
      };
      // console.log("sumbission", submission);
  
      try {
        const response = await axios.post("https://study-buddy-server-omega.vercel.app/submitAssignment", submission);

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
                        navigate('/pending');
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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold text-center uppercase tracking-wide">
            Submit Assignment
          </h2>
        </div>

        <div className="p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="googleDocsLink" className="block font-medium">Google Docs Link</label>
              <input
                type="url"
                name="googleDocsLink"
                id="googleDocsLink"
                placeholder="Enter Google Docs link"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="quickNote" className="block font-medium">Quick Note</label>
              <textarea
                name="quickNote"
                id="quickNote"
                placeholder="Add a quick note"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit Assignment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TakeAssignment;