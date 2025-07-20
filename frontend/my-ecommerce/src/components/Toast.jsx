import React from 'react';

export default function Toast({ message, type }) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-2xl shadow-xl text-white text-lg font-semibold transition-all duration-500 animate-fade-in-up
        ${type === 'success' ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-700'}
      `}
      style={{ minWidth: 180, textAlign: 'center', pointerEvents: 'none' }}
    >
      {message}
    </div>
  );
}
