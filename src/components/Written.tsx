export default function Written() {
  const blogPosts = [
    {
      title: 'how to evaluate model, infrastructure, and product companies in AI',
      subtitle: 'lessons from job hunting in AI (part 3, final.)',
      year: '2024',
      link: 'https://substack.com/post/ai-evaluation'
    },
    {
      title: 'how to spot a rocketship startup in AI',
      subtitle: 'lessons from job hunting in AI (part 2)',
      year: '2024',
      link: 'https://substack.com/post/rocketship-ai'
    },
    {
      title: 'vanity metrics to ignore and why hypergrowth matters',
      subtitle: 'lessons from job hunting in AI (part 1)',
      year: '2024',
      link: 'https://substack.com/post/vanity-metrics'
    },
    {
      title: 'going from 0 to 600+ users in six weeks',
      subtitle: 'what i learned while building duolok',
      year: '2023',
      link: 'https://substack.com/post/duolok-journey'
    },
    {
      title: 'explaining gpt-4&apos;s secret sauce: transformers',
      subtitle: '',
      year: '2023',
      link: 'https://substack.com/post/transformers-explained'
    },
    {
      title: 'teaching computers to speak english',
      subtitle: 'delving into how language models work.',
      year: '2023',
      link: 'https://substack.com/post/language-models'
    },
    {
      title: 'simplifying key machine learning terms: demystifying the jargon',
      subtitle: '',
      year: '2023',
      link: 'https://substack.com/post/ml-terms'
    },
    {
      title: 'learning #1: i know nothing.',
      subtitle: '',
      year: '2022',
      link: 'https://substack.com/post/learning-1'
    },
    {
      title: 'if you have a 7-second memory span, to what degree are you a person?',
      subtitle: 'applying Locke&apos;s view on personhood to Clive Wearing - the most amnesiac person in the world',
      year: '2020',
      link: 'https://substack.com/post/memory-personhood'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Rhetoric has always been part of my life, just in different forms. Back in high school, I&apos;d spend 
          weeknights buried in STEM homework, and then weekends at debate tournaments. In college, when my brain was fried 
          from debugging, I&apos;d unwind with Nick Bostrom - and sometimes Kant if I was feeling particularly masochistic. These days, 
          writing helps me untangle the mess of thoughts in my head and share what I&apos;m learning. I write to solidify my ideas, and 
          also to hopefully help others along the way. Here&apos;s some of that mess put to paper:
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-2 sm:space-y-0">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg text-black group-hover:text-gray-700 mb-1 group-hover:text-green-600 break-words">
                  {post.title}
                </h3>
                {post.subtitle && (
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 break-words">
                    {post.subtitle}
                  </p>
                )}
              </div>
              <span className="text-gray-500 text-xs sm:text-sm font-medium sm:ml-4 flex-shrink-0 self-start">
                {post.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 