interface BottomNavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function BottomNavigation({ currentView, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard', emoji: '🏠', label: 'Inicio' },
    { id: 'grades', emoji: '📝', label: 'Notas' },
    { id: 'resources', emoji: '📚', label: 'Recursos' },
    { id: 'analytics', emoji: '📊', label: 'Stats' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#23262f] border-t border-gray-700 z-20">
      <div className="grid grid-cols-4 gap-2 p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-xl transition-all
              ${
                currentView === item.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white'
                  : 'text-gray-400 hover:bg-[#1a1d24]'
              }
            `}
          >
            <div className="text-2xl mb-1">{item.emoji}</div>
            <div className={`text-xs ${currentView === item.id ? 'text-white' : 'text-gray-400'}`}>
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}