import photo1 from "../photos/sneakers/1.png";
import photo2 from "../photos/sneakers/2.png";
import photo3 from "../photos/sneakers/3.png";

const ProductCards = () => {
    const products = [
      {
        id: 1,
        title: "Title 1",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: photo1, // Replace with real image URL
        shape1: "bg-pink-500",
        positionAndSize1: "bottom-7 -left-2 w-56 h-56 rounded-3xl",
      },
      {
        id: 2,
        title: "Title 2",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: photo2, // Replace with real image URL
        shape1: "bg-[#B45309]",
        shape2: "bg-[#0369A1]",
        positionAndSize1: "bottom-20 right-0 w-32 h-32 rounded-[2rem]",
        positionAndSize2: "-top-4 left-0 w-40 h-40 rounded-[2.5rem]"
      },
      {
        id: 3,
        title: "Title 3",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: photo3, // Replace with real image URL
        shape1: "bg-[#A21CAF]",
        shape2: "bg-[#15803D]",
        positionAndSize1: "-bottom-1 w-52 h-52 right-40 rounded-[1.8rem]",
        positionAndSize2: "top-20 -right-7 w-60 h-60 rounded-[2.5rem]"
      }
    ];
  
    return (
      <div className="bg-gray-900 py-12 text-white px-20 ">
        <div className="text-center mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold">The best of the best</h2>
          <button className="mt-4 bg-transparent border border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
            Sign up now
          </button>
        </div>
  
        {/* Product Card Section */}
        <div className="flex gap-20 w-full justify-between items-center">
          {products.map((product) => (
            <div className="relative flex p-4  ">
              <div className={`absolute ${product.shape1} ${product.positionAndSize1}`}></div>
              <div className={`absolute ${product.shape2} ${product.positionAndSize2}`}></div>
              <div key={product.id} className="bg-gray-800 p-8 rounded-lg relative z-50">
                <img src={product.image} alt={product.title} className="w-full rounded-lg" />
                <p className="text-2xl font-bold mt-4">{product.title}</p>
                <p className="text-lg mt-2">{product.description}</p>
              <button className="mt-4 bg-transparent border border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 w-full">
                <span role="img" aria-label="cart">🛒</span> Buy Now
              </button>
              </div>
            </div>     
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductCards;
  