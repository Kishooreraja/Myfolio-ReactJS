import React from 'react';

const Technologies = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced', width: '100%' },
    { name: 'CSS & Bootstrap', level: 'Advanced', width: '90%' },
    { name: 'JavaScript', level: 'Advanced', width: '83%' },
    { name: 'MongoDB', level: 'Advanced', width: '80%' },
    { name: 'ExpressJs', level: 'Advanced', width: '87%' },
    { name: 'ReactJs', level: 'Advanced', width: '90%' },
    { name: 'RestAPI', level: 'Advanced', width: '75%' },
  ];

  return (
    <div className="py-28 text-white" id="technologies" >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  style={{ width: skill.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
