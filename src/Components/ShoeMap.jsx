import React, { useState } from 'react';

function ShoeMap() {
  const [activePoint, setActivePoint] = useState(null);

  const points = [
    { id: 1, name: 'Emma Simpson', shoe: 'Cool Shoes', image: "/SHOE/1.png", position: 'top-left' },
    { id: 2, name: 'John Doe', shoe: 'Fast Sneakers', image: "/SHOE/1.png", position: 'top-right' },
    { id: 3, name: 'Jane Doe', shoe: 'Stylish Runners', image: "/SHOE/1.png", position: 'bottom-left' },
    // Add more points as needed
  ];

  return (
    <div className="relative flex justify-center items-center bg-brown-700 h-screen pt-80">
      <img src="/SHOE/1.png" alt="Shoe Map" className="h-full w-full" />
    </div>
  );
}

export default ShoeMap;
