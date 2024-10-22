import React from 'react';

const menuItems = [
  { category: 'Appetizers', items: [
    { name: 'Edamame', price: 5 },
    { name: 'Gyoza', price: 7 },
    { name: 'Tempura', price: 8 },
  ]},
  { category: 'Sushi Rolls', items: [
    { name: 'California Roll', price: 10 },
    { name: 'Spicy Tuna Roll', price: 12 },
    { name: 'Dragon Roll', price: 15 },
  ]},
  { category: 'Bento Boxes', items: [
    { name: 'Teriyaki Chicken Bento', price: 18 },
    { name: 'Salmon Bento', price: 20 },
    { name: 'Vegetarian Bento', price: 16 },
  ]},
];

const Menu = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-secondary mb-12">Our Menu</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {menuItems.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-primary mb-4">{category.category}</h2>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-semibold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Bento Box"
            className="rounded-xl shadow-md w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;