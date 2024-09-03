import React from 'react';
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import project5 from "../assets/project5.jpg";
import project4 from "../assets/project4.jpg";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="border border-white bg-transparent rounded-lg shadow-lg p-5 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={project2} className="w-full h-auto rounded-md" alt="Project" />
          <h3 className="text-2xl font-semibold mt-6">FoodiFly</h3>
          <p className="text-gray-300 text-lg mt-2">
            It is a MERN stack food ordering app with Stripe integration. It's fully responsive, featuring user login, cart, orders, and an admin panel for seamless management and controls.
          </p>
          <div className="flex gap-4 mt-10 mb-4 justify-center">
            <a
              href="https://food-delivery-frontend-50lx.onrender.com/" // Replace with actual URL
              className="py-3 px-11  bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
           
          </div>
        </div>

        <div className="border border-white bg-transparent rounded-lg shadow-lg p-5 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={project3} className="w-full h-auto rounded-md" alt="Project" />
          <h3 className="text-2xl font-semibold mt-6">Resume as a blog</h3>
          <p className="text-gray-300 text-lg mt-2">
          This project showcases a personal portfolio website created using HTML, CSS, and Bootstrap. It highlights Kishoore's skills, education, and projects, offering a detailed view of his experience and interests.
          </p>
          <div className="flex gap-4 mt-10 mb-4 justify-center">
            <a
              href="https://kishoore.bss.design" // Replace with actual URL
              className="py-3 px-11  bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
            
          </div>
        </div>

        <div className="border border-white bg-transparent rounded-lg shadow-lg p-5 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={project4} className="w-full h-auto rounded-md" alt="Project" />
          <h3 className="text-2xl font-semibold mt-6">Ainthu Kari Choru</h3>
          <p className="text-gray-300 text-lg mt-2">
          This static blog, built with HTML, CSS, and JavaScript, showcases a traditional South Indian restaurant in Coimbatore. It details the dishes, their preparation, and the health benefits of the food.
          </p>
          <div className="flex gap-4 mt-10 mb-4 justify-center">
            <a
              href="https://example.com/live-preview " // Replace with actual URL
              className="py-3 px-11  bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>

          </div>
        </div>

        <div className="border border-white bg-transparent rounded-lg shadow-lg p-5 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img src={project5} className="w-full h-auto rounded-md" alt="Project" />
          <h3 className="text-2xl font-semibold mt-6">Mini Kit</h3>
          <p className="text-gray-300 text-lg mt-2">
          The Mini Kit project includes two tools: a grade calculator and a to-do list maker. It is built using HTML, CSS, and JavaScript, offering practical utilities for users.
          </p>
          <div className="flex gap-4 mt-10 mb-4 justify-center">
            <a
              href="https://mini-kit.firebaseapp.com/" // Replace with actual URL
              className=" py-3 px-11  bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
