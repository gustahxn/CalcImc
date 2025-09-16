import React from 'react';
const InputForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="space-x-4">
        <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Digite algo..." />
        <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Digite algo...." />
      </div>
    </div>
  );
};

export default InputForm;
