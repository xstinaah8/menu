import React from 'react';

const cateringOptions = [
  {
    name: 'Sushi Platter',
    description: 'A variety of fresh sushi rolls perfect for any event.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Bento Box Assortment',
    description: 'Individual bento boxes with a mix of our popular dishes.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80'
  },
  {
    name: 'Tempura Deluxe',
    description: 'A selection of crispy tempura vegetables and seafood.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
  }
];

const Catering = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-secondary mb-12">Catering Services</h1>
      <p className="text-center text-xl text-gray-600 mb-8">Let us cater your next event with our delicious Japanese cuisine</p>
      <div className="grid md:grid-cols-3 gap-8">
        {cateringOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
            <img src={option.image} alt={option.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-secondary">{option.name}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <p className="text-primary font-bold">Starting at ${option.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Ready to place an order?</h2>
        <p className="mb-6 text-gray-600">Contact us for custom catering options and quotes</p>
        <a href="tel:5551234567" className="bg-primary text-white py-2 px-6 rounded-xl hover:bg-red-700 transition duration-300">Call Now</a>
      </div>
    </div>
  );
};

export default Catering;