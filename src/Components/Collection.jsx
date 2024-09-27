import React, { useState } from 'react';

const menuItems = [
  {
    icon: '/collection/1.png',
    title: 'Bibendum tellus',
  },
  {
    icon: '/collection/4.png',
    title: 'Cras eget',
  },
  {
    icon: '/collection/5.png',
    title: 'Dolor pharetra',
  },
  {
    icon: '/collection/6.png',
    title: 'Amet, fringilla',
  },
  {
    icon: '/collection/7.png',
    title: 'Amet nibh',
  },
  {
    icon: '/collection/8.png',
    title: 'Sed velit',
  },
];

function Collection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col px-10 py-8 bg-[#fffdf3] w-screen pb-72">
      <img src="/collection/9.png" alt="Collection" className="absolute sm:-left-4  h-full w-full sm:mt-40 z-0 hidden sm:block" />
      <img src="/collection/10.png" alt="Collection" className="absolute sm:-left-4  h-full w-full sm:mt-60 z-0  hidden sm:block" />
      <img src="/collection/11.png" alt="Collection" className="absolute sm:-left-4  h-full w-full sm:mt-96 z-0  hidden sm:block" />
      {/* Heading Section */}
      <div className="text-start flex flex-col gap-3 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Grow your collection</h1>
        <p className="text-lg text-gray-600">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
          Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex mt-16 z-10 ">
        {/* Left Menu */}
        <div className="w-full sm:w-1/4">
          <div className="space-y-4 flex flex-row sm:flex-col overflow-hidden scrollbar-hide">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`flex z-50 items-center space-x-2 min-w-80 sm:w-80 p-3 rounded-lg cursor-pointer ${
                  selectedIndex === index ? 'bg-white  font-bold shadow-lg' : ''
                }`}
              >
                <img src={item.icon} alt={item.title} className="h-6 w-6" />
                <p className="text-md">{item.title}</p>
                {selectedIndex === index && (
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/arrow.png"
                    alt="arrow"
                    className="ml-auto h-4 w-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center relative z-50 scrollbar-hide " >
          {/* First Image */}
          <div className="relative sm:mr-40 z-50">
            <img
              src="/collection/2.png" 
              alt="Shoe Collection"
              className="rounded-lg w-full h-full "
            />
            {/* Second Overlay Image */}
            <div className="absolute sm:bottom-0 sm:right-0 sm:translate-x-32 sm:translate-y-52 ">
              <img
                src="/collection/3.png"
                alt="Detail"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
