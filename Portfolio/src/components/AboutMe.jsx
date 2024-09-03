import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Icons for education and experience

const timelineData = [
  { year: '2015 - SSLC', content: 'Achieved 75% in SSLC at Nanjappa Municipal Boys Higher Secondary School.', type: 'education' },
  { year: '2017 - HSC', content: 'Earned 57% in HSC at Nanjappa Municipal Boys Higher Secondary School and began a BCA in web development at RVS College of Arts and Science.', type: 'education' },
  { year: '2019 - Volunteer', content: 'Organized an intercollege hackathon as a student volunteer, supported by Facebook Developer Circle and Google.', type: 'education' },
  { year: '2020 - Graduated', content: 'Completed a BCA from RVS College of Arts and Science, affiliated with Bharathiyar University.', type: 'education' },
  { year: '2023 - Pursuing', content: 'Studying MBA in HRM at Alagappa University since 2023, focusing on advanced human resource management.', type: 'education' },

  { year: '2020', content: 'Started working as a Junior software engineer at SholkLabs, Coimbatore, gaining foundational experience in full-stack development from February   to September 2020.', type: 'experience' },
  { year: '2021 - 2023', content: 'HR Executive at CR Garments Exports LLP: Managed recruitment, employee relations, payroll, compliance, and employee records, ensuring accurate payments and benefits eligibility.', type: 'experience' },
  { year: '2023 - 2024 ', content: 'HR Executive at NevedhaKnits: Managed recruitment, employee relations, payroll, compliance, and employee records, ensuring accurate payments and benefits.', type: 'experience' },
];

const TimelineItem = ({ year, content, type }) => {
  const isEducation = type === 'education';
  return (
    <div className="relative mb-6 sm:mb-8">
      <div className={`relative z-10 rounded-md shadow-lg p-4 bg-gradient-to-r ${isEducation ? 'from-purple-600 to-purple-700' : 'from-blue-600 to-blue-700'} transition-transform duration-300 ease-in-out hover:bg-gradient-to-l`}>
        <div className="flex items-center">
          {isEducation ? (
            <FaGraduationCap className="text-white text-sm mr-2" />
          ) : (
            <FaBriefcase className="text-white text-sm mr-2" />
          )}
          <h3 className="text-base font-semibold text-white">{year}</h3>
        </div>
        <p className="text-gray-200 text-sm mt-2">{content}</p>
      </div>
      {/* Connecting line */}
      <div className={`absolute inset-x-0 top-1/2 transform -translate-y-1/2 w-full ${isEducation ? 'bg-purple-300' : 'bg-blue-300'} h-0.5`}></div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="py-12 sm:py-16 " id="aboutme">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>

        <div className="relative">
          {/* Mobile View: Separate Connecting Lines */}
          <div className="sm:hidden">
            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                {/* Education Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-4 sm:mb-6 animate-slideIn">Education</h3>
                <div className="relative">
                  {timelineData
                    .filter(item => item.type === 'education')
                    .map((item, index) => (
                      <div key={item.year} className="relative">
                        <TimelineItem
                          year={item.year}
                          content={item.content}
                          type={item.type}
                        />
                        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-500"></div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-1/2 pl-2">
                {/* Experience Section */}
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-300 mb-4 sm:mb-6 animate-slideIn">Experience</h3>
                <div className="relative">
                  {timelineData
                    .filter(item => item.type === 'experience')
                    .map((item, index) => (
                      <div key={item.year} className="relative">
                        <TimelineItem
                          year={item.year}
                          content={item.content}
                          type={item.type}
                        />
                        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500"></div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View: Central Connecting Line */}
          <div className="hidden sm:block relative">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-t from-purple-500 to-blue-500 z-0"></div>
            <div className="flex flex-row justify-between">
              {/* Education Section */}
              <div className="sm:w-1/2 pr-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-4 sm:mb-6 animate-slideIn">Education</h3>
                {timelineData
                  .filter(item => item.type === 'education')
                  .map((item, index) => (
                    <TimelineItem
                      key={item.year}
                      year={item.year}
                      content={item.content}
                      type={item.type}
                    />
                  ))}
              </div>

              {/* Experience Section */}
              <div className="sm:w-1/2 pl-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-300 mb-4 sm:mb-6 animate-slideIn">Experience</h3>
                {timelineData
                  .filter(item => item.type === 'experience')
                  .map((item, index) => (
                    <TimelineItem
                      key={item.year}
                      year={item.year}
                      content={item.content}
                      type={item.type}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
