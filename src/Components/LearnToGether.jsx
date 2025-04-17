import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LearnToGether = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // shows animation every scroll into view
  }, []);

  return (
    <section className="bg-blue-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div data-aos="fade-right" className="text-slate-800">
          <h2 className="lg:text-3xl text-lg font-bold mb-4 flex items-center gap-2">
             Collaborative Learning Made Easy
          </h2>
          <p className="lg:text-lg text-slate-700 mb-6">
            Connect with your study buddies in real-time. Share ideas, solve assignments together, and keep each other motivated.
          </p>
          <ul className="text-left text-base text-slate-800 space-y-2 pl-5 list-disc">
            <li>👥 Group study rooms with live chat</li>
            <li>📂 Share assignments & resources</li>
            <li>🎯 Track progress together</li>
          </ul>
          <button className="px-6 py-3 btn btn-outline text-white font-semibold rounded-lg shadow-lg  focus:outline-none mt-5 transition text-slate-700">
            Start a Study Room
          </button>
        </div>

        {/* Image */}
        <div data-aos="fade-left">
          <img
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            src="https://i.ibb.co.com/JwLMxWLx/image.png"
            alt="Collaborative Learning"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnToGether;
