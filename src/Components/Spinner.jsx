import React from 'react';
import { BounceLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
      <BounceLoader color="#3498db" size={60} />
    </div>
    );
};

export default Spinner;