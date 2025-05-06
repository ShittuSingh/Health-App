import React from "react";

const teamMembers = [
  {
    name: "Member 1",
    image: "https://images.unsplash.com/photo-1590183404019-bf01338abf79?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
    bg: "bg-orange-200",
  },
  {
    name: "Member 2",
    image: "https://images.unsplash.com/photo-1663870707409-1d0c4f950e68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    bg: "bg-blue-200",
  },
  {
    name: "Member 3",
    image: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bg: "bg-orange-500",
  },
  {
    name: "Member 4",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bg: "bg-green-300",
  },
];

const OurTeam = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
        <div className="grid grid-cols-5 gap-4 md:w-1/2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-full overflow-hidden w-36 h-36 md:w-44 md:h-44 flex items-center justify-center ${member.bg}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-green-600 font-semibold text-sm mb-2">
            Our Professional Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Our Team Includes Experts in Healthy Cooking and Dietary Consulting.
          </h2>
          <p className="text-gray-600 mb-6">
            Meet our team of experts in healthy cooking and dietary consulting. Get
            personalized guidance for your wellness journey. Start thriving today!
          </p>
          <button className="bg-lime-300 text-black font-medium py-2 px-6 rounded-full hover:bg-lime-400 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
