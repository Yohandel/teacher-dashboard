import { Button } from './ui/button';
import { FileText, BookOpen, FolderOpen, Download } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: 'Material de Apoyo',
      description: 'Encuentra apoyo, recursos útiles de ma...',
      icon: FileText,
    },
    {
      title: 'Guía de Estudio',
      description: 'Organiza las sucesiones clarísimo',
      icon: BookOpen,
    },
    {
      title: 'Proyecto de Clase',
      description: 'Favor Unicalmento Textuales ence',
      icon: FolderOpen,
    },
  ];

  return (
    <div className="bg-[#24272f] rounded-lg p-4 md:p-6">
      <h2 className="mb-4 md:mb-6">Recursos</h2>
      
      {/* Mobile: Icon Grid View */}
      <div className="md:hidden grid grid-cols-3 gap-3">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="bg-[#1a1d24] rounded-lg p-4 flex flex-col items-center justify-center hover:bg-[#2a2d34] transition-colors cursor-pointer">
              <Icon className="w-8 h-8 mb-2 text-blue-400" />
              <div className="text-xs text-center">{resource.title}</div>
              <Download className="w-3 h-3 mt-2 text-gray-400" />
            </div>
          );
        })}
      </div>

      {/* Desktop: Card View */}
      <div className="hidden md:block space-y-3 md:space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-[#1a1d24] rounded-lg p-3 md:p-4">
            <h3 className="mb-1 md:mb-2 text-sm md:text-base">{resource.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{resource.description}</p>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 text-xs md:text-sm">
                Ver recursos
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 text-xs md:text-sm">
                Descargar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
