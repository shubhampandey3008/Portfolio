interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}: SidebarProps) {
  const menuItems = [
    { id: 'about', label: 'about', emoji: '👤' },
    { id: 'built', label: 'built', emoji: '🛠️' },
    { id: 'skills', label: 'skills', emoji: '🎯' },
    // { id: 'dsa', label: 'dsa', emoji: '💻' },
    // { id: 'written', label: 'written', emoji: '✍️' },
  ];

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 min-h-screen bg-white border-r border-gray-200 p-6">
        <nav className="space-y-2 w-full">
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
              <span className={`text-[25px] font-gloria ${
                activeSection === item.id 
                  ? 'text-red-600' 
                  : 'text-amber-800 hover:text-red-600'
              }`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`
        lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                activeSection === item.id
                  ? 'bg-gray-100 text-black font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              <span className={`text-[25px] font-gloria ${
                activeSection === item.id 
                  ? 'text-red-600' 
                  : 'text-amber-800 hover:text-red-600'
              }`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
} 