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
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  const resumeRef = useRef(null);
  const whoAmIRef = useRef(null);
  const currentAnnotation = useRef<any>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const journeyItems = [
    {
      title: 'Now',
      emoji: '📍',
      description: 'Software Engineer at Ciena | AI Enthusiast | Tech Writer',
      details: [
        'Transitioned to Ciena as a Python Developer, focusing on Resource Adapters for leading global networking firms',
        'Developing scalable solutions that power critical network infrastructure worldwide',
        'Actively staying at the forefront of AI developments and emerging technologies',
        'Sharing insights and learnings through technical writing and community engagement',
        'Building AI-powered solutions while maintaining a keen eye on industry trends'
      ]
    },
    {
      title: 'Joined an NGO as a founding member which became my second home',
      emoji: '❤️',
      description: 'Founding Member at Kritansh School of Hope',
      details: [
        'What began as a 3-month internship evolved into a life-changing journey at <a href="https://www.instagram.com/kritanshschoolofhope/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kritansh School of Hope</a>',
        'Dedicated weekends to teaching underprivileged children, making education accessible and engaging',
        'Organized and led donation drives that positively impacted over 250 children across the city',
        'Built lifelong friendships and discovered the joy of giving back to the community',
        'Embarked on meaningful trips across the country, creating memories while serving others',
        'Found my second family at Kritansh, where compassion meets action'
      ]
    },
    {
      title: 'Masters in Computer Science paved way to my first job',
      emoji: '🎓',
      description: 'MCA from JNU | First Professional Role at Hughes Systique',
      details: [
        'Cleared competitive entrance exams to join the prestigious Jawaharlal Nehru University',
        'Learned from distinguished professors and developed a passion for Natural Language Processing',
        'Created an innovative sentiment analysis project analyzing my class\'s WhatsApp group conversations',
        'Secured internship and first job at Hughes Systique, marking the beginning of my professional journey',
        'Became the founding member of the company\'s AI team, pioneering artificial intelligence initiatives',
        'Led the development of the company\'s first AI Assistant, revolutionizing internal operations',
        'Won multiple <a href="http://www.drive.com/awards" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">awards</a> for innovative product demonstrations and technical excellence',
        'Single-handedly built an end-to-end Document Management System using Azure AI and Power Platform',
        'Implemented advanced RAG techniques and developed robust data preprocessing pipelines'
      ]
    },
    {
      title: 'Moved to a competitive University in Delhi',
      emoji: '🏛️',
      description: 'Bachelor\'s from University of Delhi | Personal & Academic Growth',
      details: [
        'Embarked on my Computer Science journey at the prestigious University of Delhi',
        'Actively participated in networking events, expanding my professional connections',
        'Organized various activities and attended industry conferences, building leadership skills',
        'Competed in hackathons, pushing the boundaries of innovation and creativity',
        'Formed lasting friendships through vibrant hostel life and shared experiences',
        'Achieved success in the university cricket championship, balancing academics with sports',
        'Adapted to online learning during COVID-19, though missing the full college experience',
        'Developed resilience and adaptability that would serve me throughout my career'
      ]
    },
    {
      title: 'Born and Brought up in Himalayas',
      emoji: '🏔️',
      description: 'Rooted in Kumaoni Culture | Himalayan Heritage',
      details: [
        'Born and raised in Pithoragarh, a picturesque Himalayan town surrounded by natural beauty',
        'Deeply rooted in rich Kumaoni traditions and cultural heritage',
        'Grew up surrounded by the majestic mountains that instilled humility and perspective',
        'Sports played a pivotal role in my childhood, teaching teamwork and perseverance',
        'Raised in a humble middle-class family that emphasized values over material possessions',
        'The mountains taught me to dream big while staying grounded in reality',
        'This foundation shaped my worldview and approach to life\'s challenges'
      ]
    }
  ];

  const professionalItems = [
    {
      title: 'Software Engineer 1B - RA Team',
      company: 'Ciena',
      period: 'Mar 2025 - Present',
      description: 'Python Developer working on Resource Adapters powering global network infrastructure',
      logoSrc: '/ciena.png', // replace with your company logo in `public/`
      details: [
        'Designing and building robust Resource Adapters used by large networking firms',
        'Improving reliability and maintainability of critical backend services',
        'Collaborating cross-functionally to deliver production-grade features'
      ]
    },
    {
      title: 'Associate Software Engineer - AI Team',
      company: 'Hughes Systique',
      period: 'July 2023 - Feb 2025',
      description: 'Founding member of internal AI team; shipped company-wide AI Assistant',
      logoSrc: '/Hughes-Systique.png', // replace with your company logo in `public/`
      details: [
        'Built an end-to-end Document Management System using Azure AI + Power Platform',
        'Implemented RAG pipelines, data preprocessing, and robust evaluation suites',
        'Won multiple awards for live product demos and engineering excellence'
      ]
    },
    {
      title: 'Software Engineer Intern - AI Team',
      company: 'Hughes Systique',
      period: 'Jan 2023 - June 2023',
      description: 'Founding member of internal AI team; shipped company-wide AI Assistant',
      logoSrc: '/Hughes-Systique.png', // replace with your company logo in `public/`
      details: [
        'Built an end-to-end Document Management System using Azure AI + Power Platform',
        'Implemented RAG pipelines, data preprocessing, and robust evaluation suites',
        'Won multiple awards for live product demos and engineering excellence'
      ]
    }
  ];

  const educationItems = [
    {
      degree: 'MCA — Master of Computer Applications',
      institution: 'Jawaharlal Nehru University (JNU)',
      period: '2020 - 2022',
      logoSrc: '/jnu.png', // replace with your university logo in `public/`
      details: [
        'Focused on NLP; built a WhatsApp sentiment analysis project',
        'Secured internship and first role via campus placement'
      ]
    },
    {
      degree: "Bachelor's — Computer Science",
      institution: 'University of Delhi',
      period: '2017 - 2020',
      logoSrc: '/DU.png', // replace with your university logo in `public/`
      details: [
        'Active in clubs, hackathons, and community initiatives',
        'Balanced academics with sports and leadership activities'
      ]
    }
  ];

  const awardsItems = [
    {
      name: 'Innovation Award',
      issuer: 'Hughes Systique',
      year: '2023',
      logoSrc: '/file.svg', // replace with award/issuer mark in `public/`
      details: [
        'Recognized for building the first internal AI Assistant and live demos',
        'Awarded for technical excellence and business impact'
      ]
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
          <div className="space-y-10">
            {/* Professional Experience */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-4">
                {professionalItems.map((item, index) => {
                  const sectionId = `professional-${index}`;
                  const isOpen = openSections[sectionId];
                  return (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <div 
                        className="cursor-pointer"
                        onClick={() => toggleSection(sectionId)}
                      >
                        <div className={`flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                          <div className="w-16 h-16 rounded-md bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {item.logoSrc ? (
                              <Image src={item.logoSrc} alt={`${item.company} logo`} width={64} height={64} className="w-16 h-16 object-contain" />
                            ) : (
                              <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-400">Logo</div>
                            )}
                          </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-base sm:text-lg break-words">
                                {item.company}
                              </h3>
                              <p className="text-gray-600 text-sm sm:text-base">{item.title}</p>
                            </div>
                          <span className="text-sm text-gray-500 sm:ml-4 flex-shrink-0 mt-1">{item.period}</span>
                        </div>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96 mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                          <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {item.details.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                                  <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-4">
                {educationItems.map((item, index) => {
                  const sectionId = `education-${index}`;
                  const isOpen = openSections[sectionId];
                  return (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <div 
                        className="cursor-pointer"
                        onClick={() => toggleSection(sectionId)}
                      >
                        <div className={`flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                          <div className="w-16 h-16 rounded-md bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {item.logoSrc ? (
                              <Image src={item.logoSrc} alt={`${item.institution} logo`} width={64} height={64} className="w-16 h-16 object-contain" />
                            ) : (
                              <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-400">Logo</div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base sm:text-lg break-words">
                              {item.degree}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">{item.institution}</p>
                          </div>
                          <span className="text-sm text-gray-500 sm:ml-4 flex-shrink-0 mt-1">{item.period}</span>
                        </div>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96 mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                          <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {item.details.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                                  <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Awards</h2>
              <div className="space-y-4">
                {awardsItems.map((item, index) => {
                  const sectionId = `awards-${index}`;
                  const isOpen = openSections[sectionId];
                  return (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <div 
                        className="cursor-pointer"
                        onClick={() => toggleSection(sectionId)}
                      >
                        <div className={`flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                          <div className="w-16 h-16 rounded-md bg-white border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {item.logoSrc ? (
                              <Image src={item.logoSrc} alt={`${item.issuer} logo`} width={64} height={64} className="w-16 h-16 object-contain" />
                            ) : (
                              <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-xs text-gray-400">Logo</div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base sm:text-lg break-words">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">{item.issuer}</p>
                          </div>
                          <span className="text-sm text-gray-500 sm:ml-4 flex-shrink-0 mt-1">{item.year}</span>
                        </div>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96 mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                          <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {item.details.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                                  <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          // Journey Timeline
          <div>
            <div className="space-y-6">
              {journeyItems.map((item, index) => {
                const sectionId = `journey-${index}`;
                const isOpen = openSections[sectionId];
                return (
                  <div key={index}>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleSection(sectionId)}
                    >
                      <div className={`flex items-start space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                        <span className="text-lg sm:text-xl flex-shrink-0 mt-1">{item.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg break-words">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm break-words">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96 mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                      <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                              <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                              <span dangerouslySetInnerHTML={{ __html: detail }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}