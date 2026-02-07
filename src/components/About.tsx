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

const LeetCodeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0z"/>
  </svg>
);

const CodeforcesIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.5 7.5A1.5 1.5 0 016 9v10.5A1.5 1.5 0 014.5 21h-3A1.5 1.5 0 010 19.5V9a1.5 1.5 0 011.5-1.5h3zm6-3A1.5 1.5 0 0112 6v13.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 016 19.5V6a1.5 1.5 0 011.5-1.5h3zm6-3A1.5 1.5 0 0118 3v16.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0112 19.5V3a1.5 1.5 0 011.5-1.5h3z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function About() {
  const [showProfessional, setShowProfessional] = useState(true);
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  const resumeRef = useRef(null);
  const whoAmIRef = useRef(null);
  const currentAnnotation = useRef<{ show: () => void; hide: () => void } | null>(null);

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
        'After 2 years of valuable learning and growth at HSC, I transitioned to <a href="https://www.linkedin.com/company/ciena/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Ciena</a> as a Software Developer.',
        'Currently developing scalable network orchestration solutions at Ciena, while mastering various system design and optimization techniques. On a personal level, I stay current with AI developments through hands-on projects and actively engage with the tech community across various platforms.' 
      ]
    },
    {
      title: 'Joined an NGO which became my second home',
      emoji: '❤️',
      description: 'Volunteer at Kritansh School of Hope',
      details: [
        'Joined <a href="https://www.instagram.com/kritanshschoolofhope/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Kritansh School of Hope</a> in 2023, an organization dedicated to providing education to underprivileged children in Delhi\'s slum communities. Actively participated in educational workshops and fundraising drives to support the cause.'
      ]
    },
    {
      title: 'Masters in Computer Science paved way to my first job',
      emoji: '🎓',
      description: 'MCA from JNU | First Professional Role at Hughes Systique',
      details: [
        'My passion for Computer Science led me to pursue the JNUEE exam for admission to JNU\'s master\'s program. NLP and Machine Learning quickly became my favorite subjects, where I particularly excelled with a <a href="https://github.com/shubhampandey3008/ChatMood" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Sentiment Analyzer</a> project that analyzed our class WhatsApp discussions, earning recognition from faculty.',
        'Served as a coordinator for the <a href="https://www.linkedin.com/company/placementcell-scss/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Placement Cell</a>, successfully bringing numerous HR representatives on board to conduct placement drives for our batch. During this role, I also secured a Pre-Placement Offer (PPO) from <a href="https://www.linkedin.com/company/hsc/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">HSC</a>.',
        'Joined the AI team as part of the initial group of engineers, where I developed multiple POCs focused on creating reliable products using proprietary AI models. Notable achievements include leading the development of \'Athena\', HSC\'s first internal AI chatbot.'
      ]
    },
    {
      title: 'Moved to a competitive University in Delhi',
      emoji: '🏛️',
      description: 'Bachelor\'s from University of Delhi | Personal & Academic Growth',
      details: [
        'Began my Computer Science studies at university, where I thrived under professors who emphasized hands-on learning. Through participating in and organizing hackathons, I discovered how complex systems are built by seamlessly integrating smaller components.',
        'Got the opportunity to be part of the Student Council at <a href="https://www.instagram.com/sanganika_dduc/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Sanganika</a>, Successfully worked with a team to organize the annual tech fest TechMarathon. Was part of the departmental cricket team and won the inter-department cricket championship.',
        'Adapted to online learning during the COVID-19 pandemic, diving deep into advanced subjects like Compiler Design, Cyber Security, and Data Mining. This period of remote education became an opportunity to sharpen my technical skills through intensive project work.'
      ]
    },
    {
      title: 'Born and Brought up in Himalayas',
      emoji: '🏔️',
      description: 'Rooted in Kumaoni Culture | Himalayan Heritage',
      details: [
        'Born and raised in Pithoragarh, a picturesque Himalayan town surrounded by natural beauty, no fancy city life and luxuries. Dad being in the army lived away from family most of his career.',
        'Completed my schooling at <a href="https://bcjaps.net.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Army Public School</a>, which instilled discipline and a strong work ethic. I developed a passion for sports and outdoor activities, while the school environment helped me build confidence in public speaking and stage presence. I actively participated in various sports events and took on lead roles in Annual Day functions.',
        'Passed with top grade in class 10th and 12th board exams. Still unsure what to pursue after schooling, was confident that I would end up doing something good, if not great, in life.',
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
        'Currently building Resource Adapters that enable major networking companies to efficiently manage their OSS (Operations Support Systems) suites.',
        'Architected and implemented an end-to-end Resource Adapter that interfaces with customer devices via CLI, transforming raw responses into structured resource models aligned with Ciena BluePlanet Orchestrate specifications. Streamlined resource provisioning workflows through robust object-oriented design patterns, ensuring scalability and maintainability. Delivered high code quality through comprehensive unit test coverage and leveraged AI-assisted development tools to accelerate delivery timelines by 30%.',
        'Designed and implemented a logical inventory system with Forwarding Relationship Encapsulation (FRE) to accurately map physical and logical Terminating Point Encapsulations (TPEs). Extended orchestration capabilities through precise relationship modeling, enabling streamlined management of complex network topologies using object-oriented design principles.'
      ]
    },
    {
      title: 'Software Engineer (Contractor)',
      company: 'Mercor',
      period: 'Apr 2025 - Oct 2025',
      description: 'Infrastructure automation and evaluation engineering for a leading AI research lab',
      logoSrc: '/mercor.webp',
      details: [
        'Standardized Infrastructure: Automated the containerization and environment parity of 50+ high-traffic Python repositories using Docker, facilitating high-fidelity data acquisition and reproducibility for a leading AI research lab.',
        'Evaluation Engineering: Architected atomic rubrics for complex System Design problems, establishing a rigorous benchmarking framework used to evaluate the architectural reasoning of AI models.',
        'Technical Leadership: Directed rigorous peer code reviews focused on algorithmic efficiency and edge-case detection, maintaining production-grade code quality across distributed codebases.'
      ]
    },
    {
      title: 'Associate Software Engineer - AI Team',
      company: 'Hughes Systique',
      period: 'July 2023 - Feb 2025',
      description: 'Founding member of internal AI team; shipped company-wide AI Assistant',
      logoSrc: '/Hughes-Systique.png', // replace with your company logo in `public/`
      details: [
        'ML Document Pipeline: Engineered automated processing system using Power Automate and Python, extracting 10,000+ monthly vendor documents with 95% accuracy, reducing processing time from 4 hours to 30 minutes',
        'Data Architecture Design: Architected serverless pipeline using GCP Cloud Run and BigQuery, processing 100+ vendors’ records and fault data daily, enabling real-time analytics',
        'SSO Access Control: Implemented OKTA SSO authentication using OAuth 2.0 for DMS, securing vendor document access and processing for external partners with zero security incidents',
        'AI Assistant: Developed full-stack AI assistant using NextJS and FastAPI, driving 50%+ adoption across 1000+ employees with a data-driven dashboard for usage analytics and continuous feature deployment',
        'Backend Infrastructure: Architected high-performance FastAPI backend with robust exception handling, reducing response time by 50%, utilizing MySQL and Weaviate, and containerizing with Docker for scalable deployment.',
        'Langchain Framework: Engineered custom functionality by overriding framework entity classes, implementing an advanced Reranker Model for document embeddings that significantly enhanced search accuracy by 80%.',
        'Testing & Deployment: Prepared comprehensive test strategy for LLM-powered chatbot, leveraging GPT-4 to automate 80% of manual testing, and implemented CI/CD workflows using JIRA to enhance quality assurance and development efficiency. Used Docker for Continuous deployment to production server'
      ]
    },
    {
      title: 'Software Engineer Intern - AI Team',
      company: 'Hughes Systique',
      period: 'Jan 2023 - June 2023',
      description: 'Founding member of internal AI team; shipped company-wide AI Assistant',
      logoSrc: '/Hughes-Systique.png', // replace with your company logo in `public/`
      details: [
        'Developed a Customer Support Assistant prototype for a leading cruise line company. The solution involved web scraping using Selenium and Beautiful Soup to gather data and documents, which powered a RAG-based AI assistant. Enhanced the system with guardrails and semantic analysis to ensure reliable, contextually accurate responses.'
      ]
    }
  ];

  const educationItems = [
    {
      degree: 'MCA — Master of Computer Applications',
      institution: 'Jawaharlal Nehru University (JNU)',
      period: '2021 - 2023',
      logoSrc: '/jnu.png', // replace with your university logo in `public/`
      details: [
        'CGPA: 8.47/10'
      ]
    },
    {
      degree: "Bachelor's — Computer Science",
      institution: 'University of Delhi',
      period: '2018 - 2021',
      logoSrc: '/DU.png', // replace with your university logo in `public/`
      details: [
        'CGPA: 8.4/10'
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

    // Set default expanded sections based on toggle state
    if (showProfessional) {
      // Resume view - expand first professional item (Ciena)
      setOpenSections(prev => ({
        ...prev,
        'professional-0': true
      }));
    } else {
      // Journey view - expand first journey item (Now)
      setOpenSections(prev => ({
        ...prev,
        'journey-0': true
      }));
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
          <p className="text-gray-600 mb-2 text-sm sm:text-base">Software Engineer exploring AI frontiers | New to tech blogging but eager to share insights | Always learning, always connecting</p>
          <a href="mailto:shubham.pandey.workconnect@gmail.com" 
             className="text-gray-600 hover:text-red-600 transition-colors text-sm underline block mb-4">
            shubham.pandey.workconnect@gmail.com
          </a>
          
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
            <a href="https://leetcode.com/u/Pandey_ji_3007/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-yellow-600 transition-colors p-2 rounded-full hover:bg-gray-100"
               title="LeetCode">
              <LeetCodeIcon />
            </a>
            <a href="https://codeforces.com/profile/just_shubham" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-100"
               title="Codeforces">
              <CodeforcesIcon />
            </a>
            <a href="https://substack.com/@techbyshubham" target="_blank" rel="noopener noreferrer" 
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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">Professional Experience</h2>
                <a 
                  href="/shubham_pandey.pdf" 
                  download="Shubham_Pandey_Resume.pdf"
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                  <button className="relative px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold text-sm flex items-center space-x-2 hover:bg-gray-300 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Resume</span>
                  </button>
                </a>
              </div>
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
                          <span className={`text-lg flex-shrink-0 ml-2 transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                            {isOpen ? '↑' : '→'}
                          </span>
                        </div>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-none mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                          <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {item.details.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                                  <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '15px' }}>{detail}</span>
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
                          <span className={`text-lg flex-shrink-0 ml-2 transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                            {isOpen ? '↑' : '→'}
                          </span>
                        </div>
                      </div>
                      {item.details && item.details.length > 0 && (
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-none mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                          <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {item.details.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                                  <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '15px' }}>{detail}</span>
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
                        <span className={`text-lg flex-shrink-0 ml-2 transition-colors ${isOpen ? 'text-gray-600' : 'text-black hover:text-green-600'}`}>
                          {isOpen ? '↑' : '→'}
                        </span>
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-none mt-3' : 'opacity-0 max-h-0 mt-0'}`}>
                      <div className="ml-6 sm:ml-8 p-4 rounded-lg">
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-gray-700 text-sm sm:text-base flex items-start">
                              <span className="text-orange-600 mr-2 mt-1 flex-shrink-0">•</span>
                              <span dangerouslySetInnerHTML={{ __html: detail }} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '15px' }} />
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