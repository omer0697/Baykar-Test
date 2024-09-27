import React from 'react';
import photo1 from '../photos/JoinUs/1.png';

function JoinUs() {
  return (
    <div className="bg-[#fffdf3] w-full h-full flex justify-center py-24">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-full sm:mx-40 flex items-center space-x-8 flex-col sm:flex-row">
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center h-1/4">
          <h1 className="text-4xl font-bold mb-4">Why join us</h1>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p className="text-gray-700">Est et in pharetra magna adipiscing ornare aliquam.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p className="text-gray-700">Tellus arcu sed consequat ac velit ut eu blandit.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <p className="text-gray-700">Ullamcorper ornare in et egestas dolor orci.</p>
            </li>
          </ul>
          <button className="mt-6 bg-transparent text-[#7f351b] border border-[#7f351b] hover:bg-[#7f351b] hover:text-white transition-all px-4 py-2 rounded">
            Sign up now
          </button>
        </div>

        {/* Video Section */}
        <div className="relative flex-1 z-10 mt-40 sm:mt-0">
          <div className="h-fit">
            <img
              src={photo1}
              alt="Running Event"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute right-[16rem] z-0 sm:-top-20 rotate-45 bg-[#FDE68A] sm:mt-0 mt-52 h-[48rem] w-32 sm:w-44 "></div>
      </div>
    </div>
  );
}

export default JoinUs;
