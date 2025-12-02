import { Home, ClipboardList, Users, FolderOpen, BarChart3, LogOut, X } from 'lucide-react';

interface SidebarProps {
  userName: string;
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ userName, currentView, onNavigate, onLogout, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'grades', label: 'Calificaciones', icon: ClipboardList },
    { id: 'attendance', label: 'Asistencia', icon: Users },
    { id: 'resources', label: 'Recursos', icon: FolderOpen },
    { id: 'analytics', label: 'Analíticas', icon: BarChart3 },
  ];

  const handleNavigate = (view: string) => {
    onNavigate(view);
    onClose(); // Cerrar sidebar en móvil después de navegar
  };

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-[#23262f] border-r border-gray-700 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header del Sidebar */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white">Panel del Profesor</h2>
              <button
                onClick={onClose}
                className="md:hidden text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Usuario */}
            <div className="flex items-center gap-3 p-3 bg-[#1a1d24] rounded-xl">
              <div className="w-10 h-10 sideBarOnjectsBackGround rounded-full flex items-center justify-center">
                <span className="text-white">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white truncate">{userName}</p>
                <p className="text-gray-400">Profesor</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                        ${
                          isActive
                            ? 'sideBarOnjectsBackGround text-white shadow-lg'
                            : 'text-gray-400 hover:bg-[#1a1d24] hover:text-white'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer - Logout */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
