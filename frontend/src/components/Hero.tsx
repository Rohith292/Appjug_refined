import React from 'react';
import { ArrowRight, Sparkles, Play, CheckCircle } from 'lucide-react';
import DEMO from '../assets/cover.png';

const Hero = () => {
  const achievements = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#002D62] to-[#121212] flex items-center relative overflow-hidden animate-slide-in-left">
      {/* Subtle Background Gradients/Elements for a more sophisticated look */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC300] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-fade-in-up"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-[#002D62] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-fade-in-up" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="font-poppins text-lg text-gray-300 tracking-wide">
                Digital Excellence Since 2020
              </span>
            </div>

            <h1 className="font-montserrat font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Your Digital
              <span className="text-yellow-400 block animate-pulse">
                Transformation
              </span>
              Partner
            </h1>

            <p className="font-poppins text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              We empower businesses to thrive in the digital age through innovative solutions, 
              cutting-edge technology, and unparalleled expertise that drives measurable results 
              and sustainable growth.
            </p>

            {/* Achievements */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-10">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-left">
                  <div className="font-montserrat font-bold text-3xl lg:text-4xl text-yellow-400 mb-1">
                    {achievement.number}
                  </div>
                  <div className="font-poppins text-sm text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group border-2 border-white/40 text-white px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="h-5 w-5" />
                <span>View Demo</span>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-3 mt-8 pt-8 border-t border-white/10">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="font-poppins text-sm text-gray-400">
                Trusted by Fortune 500 companies worldwide
              </span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src={DEMO}
              alt="Cloud Computing Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-lg animate-float-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;