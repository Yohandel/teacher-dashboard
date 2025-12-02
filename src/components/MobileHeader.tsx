import { Menu } from 'lucide-react';

interface MobileHeaderProps {
  currentView: string;
  onMenuToggle: () => void;
}

export function MobileHeader({ currentView, onMenuToggle }: MobileHeaderProps) {
  const getViewTitle = (view: string) => {
    const titles: { [key: string]: string } = {
      dashboard: 'Dashboard',
      grades: 'Calificaciones',
      attendance: 'Asistencia',
      resources: 'Recursos',
      analytics: 'Analíticas',
    };
    return titles[view] || 'Panel del Profesor';
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bg-[#23262f] z-30 border-b border-gray-700">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={onMenuToggle}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-white">{getViewTitle(currentView)}</h2>
        <div className="w-6"></div> {/* Spacer para centrar el título */}
      </div>
    </div>
  );
}