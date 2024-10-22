import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary mb-4">Welcome to The Bento Box</h1>
        <p className="text-xl text-gray-600">Experience the finest Japanese cuisine in town</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="The Bento Box Restaurant"
            className="rounded-xl shadow-md w-full h-[400px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-secondary mb-4">Contact Information</h2>
          <div className="flex items-center space-x-4">
            <MapPin className="text-primary" size={24} strokeWidth={2.5} />
            <p>123 Sushi Street, Foodie City, FC 12345</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-primary" size={24} strokeWidth={2.5} />
            <p>(555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <Clock className="text-primary" size={24} strokeWidth={2.5} />
            <div>
              <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
              <p>Sat-Sun: 12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;