import React from 'react';

const Leaders = () => {
  const leaders = [
    {
      name: 'Cody Fisher',
      role: 'CEO Founder',
      bgColor: 'bg-indigo-600',
    },
    {
      name: 'Kristin Watson',
      role: 'Manager',
      bgColor: 'bg-gray-900',
    },
    {
      name: 'Leslie Alexander',
      role: 'Design Leader',
      bgColor: 'bg-gray-900',
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-left">
          <p className="text-sm text-gray-400">• Our leader</p>
          <h2 className="text-3xl font-semibold mt-4">
            Each product is crafted with passion and dedication. Meet our leader!
          </h2>
        </div>

        {/* Leader Cards Section */}
        <div className="mt-10 grid grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className={`rounded-full ${leader.bgColor} p-6`}>
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-sm text-gray-400">{leader.role}</p>

              {/* Social Media Icons */}
              <div className="flex space-x-2 mt-4">
                <button className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
                  <i className="fab fa-twitter"></i>
                </button>
                <button className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
                  <i className="fab fa-linkedin"></i>
                </button>
                <button className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
