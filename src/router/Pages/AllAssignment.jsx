import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AssignmentCard from '../../Components/AssignmentCard';

const AllAssignment = () => {
    const allAssignment = useLoaderData()

    return (
        // <div className=''>
        //     {allAssignment.map((assignment, idx) => <AssignmentCard assignment={assignment} key={idx}></AssignmentCard>)}
        // </div>

        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 p-8">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">All Assignments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {allAssignment.map((assignment, idx) => <AssignmentCard assignment={assignment} key={idx}></AssignmentCard>)}
            </div>
        </div>
    );
};

export default AllAssignment;