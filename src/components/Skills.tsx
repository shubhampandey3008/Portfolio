'use client';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface SkillGroup {
  id: string;
  name: string;
  skills: Skill[];
  centerColor: string;
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      id: 'languages',
      name: 'Languages',
      centerColor: '#3B82F6', // Blue
      skills: [
        { name: 'Python', percentage: 20, color: '#FF6B6B' },
        { name: 'Java', percentage: 15, color: '#4ECDC4' },
        { name: 'Go', percentage: 10, color: '#45B7D1' },
        { name: 'Javascript', percentage: 15, color: '#96CEB4' },
        { name: 'SQL', percentage: 20, color: '#FFEAA7' },
        { name: 'LLM Prompting', percentage: 20, color: '#DDA0DD' }
      ]
    },
    {
        id: 'frameworks',
        name: 'Frameworks',
        centerColor: '#3B82F6',
        skills: [
            { name: 'FastAPI', percentage: 25, color: '#FF6B6B' },
            { name: 'NextJS', percentage: 25, color: '#4ECDC4' },
            { name: 'NodeJS', percentage: 15, color: '#45B7D1' },
            { name: 'NLTK', percentage: 15, color: '#96CEB4' },
            { name: 'OAuth2.0', percentage: 20, color: '#FFEAA7' }
        ]
    },
    {
        id: 'ai',
        name: 'AI Tools',
        centerColor: '#3B82F6',
        skills: [
            { name: 'LangChain', percentage: 25, color: '#FF6B6B' },
            { name: 'LangGraph', percentage: 25, color: '#4ECDC4' },
            { name: 'n8n', percentage: 25, color: '#4ECDC4' },
            { name: 'ollama', percentage: 25, color: '#96CEB4' }
        ]
    },
    {
        id: 'tools',
        name: 'Tools',
        centerColor: '#3B82F6',
        skills: [
            { name: 'Selenium', percentage: 15, color: '#FF6B6B' },
            { name: 'Git', percentage: 15, color: '#45B7D1' },
            { name: 'Docker', percentage: 15, color: '#96CEB4' },
            { name: 'Kubernetes', percentage: 10, color: '#FFEAA7' },
            { name: 'MySQL', percentage: 10, color: '#DDA0DD' },
            { name: 'PostgreSQL', percentage: 15, color: '#FFEAA7' },
            { name: 'MongoDB', percentage: 10, color: '#DDA0DD' },
            { name: 'Weaviate', percentage: 10, color: '#FFEAA7' }
        ]
    },
    {
        id: 'platforms',
        name: 'Platforms',
        centerColor: '#3B82F6',
        skills: [
            { name: 'GCP', percentage: 20, color: '#FF6B6B' },
            { name: 'Linux', percentage: 20, color: '#4ECDC4' },
            { name: 'JIRA', percentage: 20, color: '#45B7D1' },
            { name: 'Web', percentage: 30, color: '#96CEB4' },
            { name: 'Microsoft Power Platform', percentage: 10, color: '#FFEAA7' }
        ]
    }
  ];

  const CircularSkillChart = ({ group }: { group: SkillGroup }) => {
    const centerX = 200;
    const centerY = 200;
    const centerRadius = 80;
    const innerRadius = 90;  // Gap between center and ring
    const outerRadius = 140; // Wider ring
    const arrowRadius = outerRadius + 6; // Slightly outside the ring, shorter
    const labelRadius = arrowRadius + 8; // Closer to arrow tip
    
    let cumulativePercentage = 0;
    
    // Calculate positions for arrows and labels
    const getPositionForSkill = (startPercent: number, skillPercent: number) => {
      const midPercent = startPercent + (skillPercent / 2);
      const angle = (midPercent / 100) * 2 * Math.PI - Math.PI / 2; // Start from top
      return {
        angle,
        arrowX: centerX + arrowRadius * Math.cos(angle),
        arrowY: centerY + arrowRadius * Math.sin(angle),
        labelX: centerX + labelRadius * Math.cos(angle),
        labelY: centerY + labelRadius * Math.sin(angle),
        innerX: centerX + (innerRadius + 10) * Math.cos(angle),
        innerY: centerY + (innerRadius + 10) * Math.sin(angle),
        startX: centerX + (outerRadius - 10) * Math.cos(angle),
        startY: centerY + (outerRadius - 10) * Math.sin(angle)
      };
    };
    
    return (
      <div className="flex flex-col items-center space-y-6 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{group.name}</h3>
        
        <div className="relative">
          <svg
            viewBox="0 0 400 400"
            className="w-full max-w-[420px] h-auto overflow-visible"
          >
            {/* Inner colored circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r={centerRadius}
              fill={group.centerColor}
              opacity="0.9"
            />
            
            {/* Skill ring segments */}
            {group.skills.map((skill, index) => {
              const startAngle = (cumulativePercentage / 100) * 2 * Math.PI;
              const endAngle = ((cumulativePercentage + skill.percentage) / 100) * 2 * Math.PI;
              
              // Create SVG path for ring segment
              const x1 = centerX + innerRadius * Math.cos(startAngle - Math.PI / 2);
              const y1 = centerY + innerRadius * Math.sin(startAngle - Math.PI / 2);
              const x2 = centerX + outerRadius * Math.cos(startAngle - Math.PI / 2);
              const y2 = centerY + outerRadius * Math.sin(startAngle - Math.PI / 2);
              
              const x3 = centerX + outerRadius * Math.cos(endAngle - Math.PI / 2);
              const y3 = centerY + outerRadius * Math.sin(endAngle - Math.PI / 2);
              const x4 = centerX + innerRadius * Math.cos(endAngle - Math.PI / 2);
              const y4 = centerY + innerRadius * Math.sin(endAngle - Math.PI / 2);
              
              const largeArcFlag = (endAngle - startAngle) > Math.PI ? 1 : 0;
              
              const pathData = [
                `M ${x1} ${y1}`,
                `L ${x2} ${y2}`,
                `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
                `L ${x4} ${y4}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
                'Z'
              ].join(' ');
              
              // Get positions for arrow and label
              const positions = getPositionForSkill(cumulativePercentage, skill.percentage);
              
              cumulativePercentage += skill.percentage;
              
              return (
                <g key={skill.name}>
                  {/* Ring segment */}
                  <path
                    d={pathData}
                    fill={skill.color}
                    opacity="0.8"
                    stroke="white"
                    strokeWidth="2"
                    className="transition-all duration-300 hover:opacity-100"
                  />
                  
                  {/* Arrow line */}
                  <line
                    x1={positions.startX}
                    y1={positions.startY}
                    x2={positions.arrowX}
                    y2={positions.arrowY}
                    stroke="#374151"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Skill name */}
                  {(() => {
                    const isRightSide = positions.labelX >= centerX;
                    const dx = isRightSide ? 4 : -4;
                    return (
                      <text
                        x={positions.labelX}
                        y={positions.labelY}
                        textAnchor={isRightSide ? 'start' : 'end'}
                        dominantBaseline="middle"
                        dx={dx}
                        className="fill-gray-700 text-sm font-medium"
                      >
                        {skill.name}
                      </text>
                    );
                  })()}
                </g>
              );
            })}
            
            {/* Center text */}
            <text
              x={centerX}
              y={centerY + 5}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-lg font-bold"
            >
              {group.name}
            </text>
            
            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="5.6"
                refX="7.2"
                refY="2.8"
                orient="auto"
              >
                <polygon
                  points="0 0, 8 2.8, 0 5.6"
                  fill="#374151"
                />
              </marker>
            </defs>
          </svg>
        </div>
        
        {/* Simple color legend without percentages */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          {group.skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-2 text-sm">
              <div 
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: skill.color }}
              />
              <span className="text-gray-700 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Skills</h1>
        <p className="text-gray-600">
          Visual representation of technical skills and expertise areas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {skillGroups.map((group) => (
          <CircularSkillChart key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}