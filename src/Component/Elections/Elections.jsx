import React from 'react';

const Elections = ({election}) => {
    const { id, type, currentStatus, dates, title, image } = election;
console.log(election);
    return (
      <div className="max-w-[full] rounded border shadow-lg my-20">
        <img className="w-full h-[50%] rounded" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            Type: {type}
          </p>
          <p className="text-gray-700 text-base">
            Status: {currentStatus}
          </p>
          <p className="text-gray-700 text-base">
            Start Date: {dates.start}
          </p>
          <p className="text-gray-700 text-base">
            End Date: {dates.end}
          </p>
        </div>
        <div className="px-6 py-4">
         <button className='btn bg-amber-600 text-white'>View Details</button>
        </div>
      </div>
    );
};

export default Elections;