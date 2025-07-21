'use client';

import { useState, useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import Image from 'next/image';

// SVG Icons Components
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const SubstackIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
);

export default function About() {
  const [showProfessional, setShowProfessional] = useState(false);
  const resumeRef = useRef(null);
  const whoAmIRef = useRef(null);
  const currentAnnotation = useRef<any>(null);

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

  // Trigger underline animation on mount and toggle change
  useEffect(() => {
    // Remove previous annotation if it exists
    if (currentAnnotation.current) {
      currentAnnotation.current.hide();
      currentAnnotation.current = null;
    }

    // Add new annotation based on current state
    if (showProfessional && whoAmIRef.current) {
      const annotation = annotate(whoAmIRef.current, {
        type: 'underline',
        color: '#c2410c', // Tailwind red-800 equivalent
        animationDuration: 1500,
        padding: 2
      });
      annotation.show();
      currentAnnotation.current = annotation;
    } else if (!showProfessional && resumeRef.current) {
      const annotation = annotate(resumeRef.current, {
        type: 'underline',
        color: '#c2410c', // Tailwind red-800 equivalent
        animationDuration: 1500,
        padding: 2
      });
      annotation.show();
      currentAnnotation.current = annotation;
    }
  }, [showProfessional]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
        <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto sm:mx-0 flex-shrink-0">
            <Image
              src="/profile_picture.jpeg"
              alt="Shubham Pandey"
              width={96}
              height={96}
              className="w-full h-full rounded-full object-cover"
              priority
            />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Shubham Pandey</h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Software Engineer exploring AI frontiers | New to tech blogging but eager to share insights | Always learning, always connecting</p>
          
          {/* Social Links with SVG Icons */}
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://www.linkedin.com/in/shubham-pandey-23b5201a5/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
               title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://x.com/__Pandey_JI" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100"
               title="X (Twitter)">
              <XIcon />
            </a>
            <a href="https://github.com/shubhampandey3008" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
               title="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://substack.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-orange-600 transition-colors p-2 rounded-full hover:bg-gray-100"
               title="Substack">
              <SubstackIcon />
            </a>
          </div>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto mt-4 sm:mt-0">
          <span className="text-gray-600 font-handwritten text-lg sm:text-[20px] text-center sm:text-right">
            {showProfessional ? (
              <>But, <span ref={whoAmIRef} className="text-orange-700">who am I</span> really? -&gt;</>
            ) : (
              <>idc, <span ref={resumeRef} className="text-orange-700">resume</span> please -&gt;</>
            )}
          </span>
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
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-4">
              {professionalItems.map((item, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.company}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                    <span className="text-sm text-gray-500 sm:ml-4 flex-shrink-0">{item.period}</span>
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
                    <div className="flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                      <span className="text-lg sm:text-xl flex-shrink-0 mt-1">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg text-black group-open:text-gray-600 group-hover:text-green-600 break-words">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm break-words">{item.description}</p>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-3 ml-6 sm:ml-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-sm sm:text-base">{item.details}</p>
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