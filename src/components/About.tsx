'use client';

import { useState, useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

export default function About() {
  const [showProfessional, setShowProfessional] = useState(false);
  const resumeRef = useRef(null);

  const journeyItems = [
    {
      title: 'Now',
      emoji: '📍',
      description: 'Building AGI with phenomenal teammates.',
      details: 'Writing about the journey: sharing what I read and learn. Angel investing in AI startups.'
    },
    {
      title: 'AGI Pilled',
      emoji: '🧠',
      description: 'joining the technical trenches of the intelligence revolution',
      details: 'Exploring the frontiers of artificial general intelligence and contributing to cutting-edge research.'
    },
    {
      title: 'Learning to adult at Silicon Valley Startups',
      emoji: '🎓',
      description: 'searching for my ikigai by reading, writing, and coding',
      details: 'Navigating the startup ecosystem while developing technical and leadership skills.'
    },
    {
      title: 'Left home for college in the middle-of-nowhere New Hampshire',
      emoji: '🌲',
      description: 'fell in love with computer science, wrote papers about the singularity, and made life long friends',
      details: 'Discovered passion for technology and formed lasting relationships in an academic environment.'
    },
    {
      title: 'Moved to a competitive high school in Singapore',
      emoji: '🇸🇬',
      description: 'building back stronger by finding my voice as a debater',
      details: 'Developed critical thinking and communication skills through competitive debate.'
    },
    {
      title: 'Indian kid growing up in Shanghai',
      emoji: '🇮🇳',
      description: 'cross-cultural childhood anchored by family',
      details: 'Experiencing diverse cultures while maintaining strong family connections and values.'
    }
  ];

  const professionalItems = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Startup',
      period: '2023 - Present',
      description: 'Leading development of AI-powered features'
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company',
      period: '2021 - 2023',
      description: 'Full-stack development and architecture design'
    },
    {
      title: 'Computer Science Degree',
      company: 'University',
      period: '2017 - 2021',
      description: 'Graduated with honors, focus on AI and machine learning'
    }
  ];

  // Trigger underline animation on mount
  useEffect(() => {
    if (resumeRef.current) {
      const annotation = annotate(resumeRef.current, {
        type: 'underline',
        color: '#c2410c', // Tailwind red-800 equivalent
        animationDuration: 1500,
        padding: 2
      });
      annotation.show();
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Section */}
      <div className="flex items-start space-x-6 mb-8">
        <div className="w-24 h-24 relative">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-black mb-2">janvi kalra</h1>
          <p className="text-gray-600 mb-4">engineer by passion, debater by nature, struggling writer by choice</p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-black transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-black transition-colors">
              X
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://substack.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-black transition-colors">
              Substack
            </a>
          </div>
        </div>
        
        {/* Toggle Switch */}
        <div className="ml-auto flex items-center space-x-3">
          <span className="text-gray-600 font-handwritten text-[25px]">
            idc, <span ref={resumeRef} className="text-orange-700">resume</span> please</span>
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={showProfessional}
              onChange={(e) => setShowProfessional(e.target.checked)}
            />
            <label
              htmlFor="toggle"
              className="block w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
              style={{ backgroundColor: showProfessional ? '#374151' : '#d1d5db' }}
            >
              <div
                className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                style={{
                  transform: showProfessional ? 'translateX(1.5rem)' : 'translateX(0.125rem)',
                  marginTop: '0.125rem'
                }}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {showProfessional ? (
          // Professional Experience
          <div>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-4">
              {professionalItems.map((item, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.company}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Journey Timeline
          <div>
            <div className="space-y-6">
              {journeyItems.map((item, index) => (
                <details key={index} className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <span className="text-xl">{item.emoji}</span>
                      <div>
                        <h3 className="font-semibold text-lg text-black group-open:text-gray-600">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-3 ml-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">{item.details}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}