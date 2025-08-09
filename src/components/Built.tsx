export default function Built() {
  type Project = {
    emoji: string;
    title: string;
    description: string;
    link?: string;
    github?: string;
  };

  const projects: Project[] = [
    {
      emoji: '💬',
      title: 'Sheetchat - Smart Query Assistant',
      description: 'Sheetchat is an innovative natural language interface for Excel and CSV files that combines the power of SQL and LLMs to provide accurate, efficient data analysis. Unlike traditional RAG systems that struggle with calculations, Sheetchat transforms your spreadsheet data into a SQL database and uses a two-step LLM process to deliver precise answers',
      link: 'https://www.youtube.com/watch?v=hYj-001-UzM&t=9s',
      // Add your repository URL to show the GitHub icon
      github: 'https://github.com/shubhampandey3008/smartQueryAssistant'
    },
    {
      emoji: '🧠',
      title: 'CommuniGO — Real Time Chat Application',
      description: 'Answers questions about your workplace using information from your docs, Slack, Gmail, and more. ✨ 1 of 3 engineers on the tiger team that built the proof-of-concept that was demoed to investors, green lighting broader investment across the company. Personally worked on query expansion infrastructure, unstructured search, LLM evals, and the UI interface.',
      //link: 'https://codabrain.com',
      github: 'https://github.com/shubhampandey3008/CommuniGO'
    },
    {
      emoji: '💬',
      title: 'ChatMood — Sentiment Analysis using LLMs',
      description: 'This is an application that analyze the sentiments of individuals and the group as a whole after processing the WhatsApp group chats or one to one chats. It gives score from 0 to 1 with 0 being a negative sentiment score and 1 being a positive sentiment score.',
      //link: 'https://codachat.com',
      github: 'https://github.com/shubhampandey3008/ChatMood'
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
          <div
            key={index}
            className="group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-colors border border-transparent hover:border-gray-200"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl flex-shrink-0 mt-1">{project.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base sm:text-lg text-black group-hover:text-gray-700 group-hover:text-green-600 break-words">
                    {(() => {
                      const titleHref = project.link ?? project.github;
                      if (!titleHref) return project.title;
                      return (
                        <a
                          href={titleHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-current hover:underline"
                        >
                          {project.title}
                        </a>
                      );
                    })()}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source on GitHub"
                        className="text-gray-500 hover:text-black transition-colors"
                        title="GitHub"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.424 2.865 8.176 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48C19.138 20.19 22 16.438 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open project"
                        className="text-gray-500 hover:text-black transition-colors"
                        title="Open project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M13 3a1 1 0 1 0 0 2h4.586l-7.293 7.293a1 1 0 1 0 1.414 1.414L19 6.414V11a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-7z" />
                          <path d="M5 5a2 2 0 0 0-2 2v10c0 1.103.897 2 2 2h10a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 1 0 0-2H5z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 