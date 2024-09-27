import React, { useRef, useState } from 'react';
import './Slider.css'; // Import custom CSS to hide scrollbar
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';

function Slider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(20);
  const [scrollStartLeft, setScrollStartLeft] = useState(20); // Renaming to avoid conflict

  const testimonials = [
    {
      company: 'Zoomer',
      text: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, vitae turpis lorem. Varius a turpis urna id porttitor.',
      person: 'Helen Junny',
      position: 'Team Lead',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      company: 'SHELLS',
      text: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nullu.',
      person: 'Helen John',
      position: 'Co-Founder',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      company: 'ArtVenue',
      text: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      person: 'David Oxford',
      position: 'Manager',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      company: 'Techify',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet ex sed enim fermentum feugiat vel nec nunc.',
      person: 'Mark Ronson',
      position: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
    {
      company: 'BrightSky',
      text: 'Curabitur nec malesuada ipsum. Phasellus eget viverra ex. Integer gravida lectus id magna tempus tempor.',
      person: 'Sarah Lee',
      position: 'CEO',
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
    {
      company: 'InnovaSoft',
      text: 'Suspendisse sit amet arcu nec eros ultricies scelerisque ac nec eros. Integer accumsan at magna eu sodales.',
      person: 'Michael Smith',
      position: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
    },
    {
      company: 'GreenTech',
      text: 'Phasellus id nisl ac sem ullamcorper ullamcorper in sit amet augue. Nam fermentum lectus et auctor lacinia.',
      person: 'Anna Clarkson',
      position: 'Chief Product Officer',
      image: 'https://randomuser.me/api/portraits/women/50.jpg',
    },
    {
      company: 'NextGen',
      text: 'Donec posuere neque a lectus bibendum, id condimentum orci finibus. Fusce imperdiet lacus libero, in porttitor arcu varius et.',
      person: 'James King',
      position: 'COO',
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      company: 'SkyNet',
      text: 'Aliquam bibendum odio ac quam viverra, sed varius lectus varius. Etiam nec sollicitudin ipsum, in lacinia augue.',
      person: 'Samantha Miller',
      position: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      company: 'FutureCorp',
      text: 'Etiam volutpat pharetra lectus, vel vehicula neque scelerisque a. Mauris vehicula enim ut diam dapibus, vel tristique nunc suscipit.',
      person: 'Johnathan Ross',
      position: 'Founder',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
    },
  ];


  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
  
    const slider = sliderRef.current;
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollStartLeft(slider.scrollLeft);
    slider.style.cursor = 'grabbing';
    
    // Disable text selection during drag
    document.body.classList.add('no-select');
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.cursor = 'grab';
      
      // Re-enable text selection after drag
      document.body.classList.remove('no-select');
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollStartLeft - walk; // Use renamed state
  };

  // Function to scroll left
  const scrollToLeft = () => {
    sliderRef.current.scrollBy({
      left: -350, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  // Function to scroll right
  const scrollToRight = () => {
    sliderRef.current.scrollBy({
      left: 350, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex flex-col items-center py-10 bg-[#fffdf3]">
      {/* Title with buttons */}
      <div className="flex justify-between items-center w-full lg:px-16 px-6 mb-6">
        <h1 className="text-4xl font-bold z-10 pb-10">Because they love us</h1>
        <div className=" space-x-4 z-10 hidden sm:flex">
          <ArrowLeftOutlined className="text-lg text-gray-500 cursor-pointer rounded-full border-red-600 border-2 p-2" 
            onClick={scrollToLeft}
            />
          <ArrowRightOutlined 
            onClick={scrollToRight}
            className="text-lg text-gray-500 cursor-pointer rounded-full border-red-600 border-2 p-2"
            />
        </div>
      </div>
      <div className='absolute top-28 w-full h-80 flex items-center justify-center'>
        <div className='flex flex-col h-full w-full px-10'>
          <div className='bg-[#FDE68A] w-full h-full'/>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        className="w-full overflow-x-auto scrollbar-hide cursor-grab z-10"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-4 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" rounded-xl flex flex-col gap-7 shadow-xl mb-3 p-6 flex-shrink-0 w-[20.5rem] sm:w-[15rem] bg-[#fffdf3] "
            >
              <div className="flex  items-center gap-3">
                <img src="/loveUs/1.png" alt="Love Us" className="h-8 w-8 rounded-full" />
                <p className="text-gray-500 font-semibold text-lg">Zoomer</p>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.person}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{testimonial.company}</h2>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
