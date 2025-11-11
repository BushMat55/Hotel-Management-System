
import React, { useState } from 'react';

const WalkInForm = ({ onSubmit, translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    tablePreference: 'any',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of Guests *
        </label>
        <select
          required
          value={formData.guests}
          onChange={(e) => setFormData({...formData, guests: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
        >
          {[1,2,3,4,5,6,7,8].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Table Preference
        </label>
        <select
          value={formData.tablePreference}
          onChange={(e) => setFormData({...formData, tablePreference: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
        >
          <option value="any">Any Available</option>
          <option value="window">Window Seat</option>
          <option value="outdoor">Outdoor/Patio</option>
          <option value="quiet">Quiet Corner</option>
          <option value="bar">Near Bar</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests (Optional)
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
          rows="3"
          placeholder="Allergies, dietary restrictions, celebrations..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Confirm Walk-In 🍽️
      </button>

      <p className="text-xs text-gray-500 text-center">
        Average wait time: <span className="font-semibold text-amber-600">5-10 minutes</span>
      </p>
    </form>
  );
};

export default WalkInForm;