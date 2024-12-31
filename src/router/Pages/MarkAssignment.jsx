import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const MarkAssignment = () => {
    const { id } = useParams()
    const submitData = useLoaderData()
    const [marks, setMarks] = useState('');
    const [feedback, setFeedback] = useState('');
    console.log(submitData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const marks = e.target.marks.value;
        const feedback = e.target.feedback.value;
        const status = "completed";
        const value = { marks, feedback , status };

        fetch(`http://localhost:5000/submitAssignment/${submitData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Marks Submitted Successfully');
            })
            .catch(err => {
                console.error(err);
            });
       
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