export default function DSA() {
  const platforms = [
    {
      name: 'LeetCode',
      emoji: '🟡',
      description: 'Problem solving and algorithm practice',
      link: 'https://leetcode.com/janvikalra',
      stats: '500+ problems solved'
    },
    {
      name: 'Codeforces',
      emoji: '🔵',
      description: 'Competitive programming contests',
      link: 'https://codeforces.com/profile/janvikalra',
      stats: 'Expert rating'
    },
    {
      name: 'HackerRank',
      emoji: '🟢',
      description: 'Coding challenges and certifications',
      link: 'https://hackerrank.com/janvikalra',
      stats: '5-star problem solver'
    },
    {
      name: 'CodeChef',
      emoji: '🟤',
      description: 'Monthly programming contests',
      link: 'https://codechef.com/users/janvikalra',
      stats: '4-star rating'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-4">Data Structures & Algorithms</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Continuous learning and practice through competitive programming platforms. 
          Problem-solving is at the core of what I do, and these platforms help me stay sharp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start space-x-4">
              <span className="text-3xl">{platform.emoji}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-black group-hover:text-gray-700 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {platform.description}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {platform.stats}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 