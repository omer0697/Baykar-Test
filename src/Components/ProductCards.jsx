const ProductCards = () => {
    const products = [
      {
        id: 1,
        title: "Title 1",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "https://via.placeholder.com/300x200", // Replace with real image URL
        shape1: "bg-pink-500",
        shape2: "bg-blue-500"
      },
      {
        id: 2,
        title: "Title 2",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "https://via.placeholder.com/300x200", // Replace with real image URL
        shape1: "bg-orange-500",
        shape2: "bg-purple-500"
      },
      {
        id: 3,
        title: "Title 3",
        description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
        image: "https://via.placeholder.com/300x200", // Replace with real image URL
        shape1: "bg-green-500",
        shape2: "bg-teal-500"
      }
    ];
  
    return (
      <div className="bg-gray-900 py-12 text-white px-20">
        <div className="text-center mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold">The best of the best</h2>
          <button className="mt-4 bg-transparent border border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
            Sign up now
          </button>
        </div>
  
        {/* Product Card Section */}
        <div className="flex gap-20 w-full justify-between items-center">
          {products.map((product) => (
            <div key={product.id} className="relative p-6 bg-gray-800 rounded-lg shadow-xl">
              {/* Background Shapes */}
              <div className={`absolute -top-8 -left-8 h-24 w-24 rounded-lg ${product.shape1} opacity-75`}></div>
              <div className={`absolute -bottom-8 -right-8 h-24 w-24 rounded-lg ${product.shape2} opacity-75`}></div>
  
              {/* Card Content */}
              <div className="relative z-10">
                <img src={product.image} alt={product.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-gray-300">{product.description}</p>
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
  