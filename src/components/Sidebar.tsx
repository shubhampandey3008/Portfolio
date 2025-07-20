interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'about', label: 'about', emoji: '👤' },
    { id: 'built', label: 'built', emoji: '🛠️' },
    { id: 'dsa', label: 'dsa', emoji: '💻' },
    { id: 'written', label: 'written', emoji: '✍️' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
              activeSection === item.id
                ? 'bg-gray-100 text-black font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            {/* <span className="text-lg">{item.emoji}</span> */}
            <span className={`text-[38px] font-handwritten ${
              activeSection === item.id 
                ? 'text-red-600' 
                : 'text-amber-800 hover:text-red-600'
            }`}>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
} 