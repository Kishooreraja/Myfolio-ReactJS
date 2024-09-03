import React from 'react';

const AddTech = () => {
  const techSkills = [
    'GitHub',
    'Visual Studio Code',
    'Render',
    'CorelDraw',
    'Team Work',
    'Leadership',
  ];

  return (
    <div className="container mx-auto px-4 py-28 max-w-5xl">
      <h2 className="text-3xl font-bold text-center mb-12">
        Additional Technologies and Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {techSkills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transform transition-all duration-300"
          >
            <p className="text-white text-lg font-bold text-center">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTech;
