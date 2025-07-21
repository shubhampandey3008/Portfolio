export default function Built() {
  const projects = [
    {
      emoji: '🐸',
      title: 'duolok — learn languages while binging tv',
      description: 'Adds subtitles and dubbing to Netflix in the language you\'re trying to learn. Supports 38 languages. 600+ daily active users at it\'s peak. 🏆 top 8 of 7500 projects in the Buildspace s3 hackathon.',
      link: 'https://duolok.com'
    },
    {
      emoji: '🧠',
      title: 'coda brain — ai powered workplace search',
      description: 'Answers questions about your workplace using information from your docs, Slack, Gmail, and more. ✨ 1 of 3 engineers on the tiger team that built the proof-of-concept that was demoed to investors, green lighting broader investment across the company. Personally worked on query expansion infrastructure, unstructured search, LLM evals, and the UI interface.',
      link: 'https://codabrain.com'
    },
    {
      emoji: '💬',
      title: 'coda chat — document copilot',
      description: 'An AI-powered collaborator that writes content, builds tables, and leaves suggestions on how to improve your document. ✨ Became the 2nd most used GenAI feature at Coda',
      link: 'https://codachat.com'
    },
    {
      emoji: '🔗',
      title: 'langgraph.js contributions — framework to build agents',
      description: 'Got interested in agents. In the process, spent a weekend contributing to LangGraph: LangChain\'s open source framework for building agents.',
      link: 'https://langchain.com'
    },
    {
      emoji: '🔒',
      title: 'on prem llm — chat with your data securely',
      description: 'Hacked together a secure chat platform that lets users chat with their private data. Built with on-premise vector databases and local LLMs to ensure user privacy. Presented at 50Y\'s AI-for-good hackathon.',
      link: 'https://onpremllm.com'
    },
    {
      emoji: '⚡',
      title: 'open source load tester',
      description: 'Built a load tester while scaling a distributed system. Given an HTTP address and QPS, it swarms the endpoint at the given rate and provides metrics on latency and error rates. Docker image in the repo if you want to try it.',
      link: 'https://github.com/loadtester'
    },
    {
      emoji: '📱',
      title: 'bydesign — organize your life',
      description: 'Led a 5 person team to create the v1 React Native app for the company bydesign, functioning as both PM and software engineer. ✨ 50K+ downloads with 4.8/5 stars on the Apple Store.',
      link: 'https://bydesign.com'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Building software make me feel like I can solve any problem I want. It's empowering. I'm driven by the 
          potential impact of what I create: how many people will benefit, how useful is it, or how much revenue it can generate. I 
          love spending my nights and weekends tinkering, and these are some of my favorite creations:
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-colors border border-transparent hover:border-gray-200"
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="text-xl sm:text-2xl flex-shrink-0 mt-1">{project.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg text-black group-hover:text-gray-700 mb-2 group-hover:text-green-600 break-words">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 