import { Resources } from './Resources';
import { Upload, FolderOpen, FileText } from 'lucide-react';

export function ResourcesView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white mb-2">Recursos</h1>
          <p className="text-gray-400">Material didáctico y documentos compartidos</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all">
          <Upload className="w-4 h-4" />
          Subir Recurso
        </button>
      </div>
      
      {/* Stats de recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400">Total de Recursos</p>
          </div>
          <p className="text-white">48 archivos</p>
          <p className="text-gray-400 mt-1">Compartidos con estudiantes</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-gray-400">Categorías</p>
          </div>
          <p className="text-white">12 carpetas</p>
          <p className="text-gray-400 mt-1">Organizadas por materia</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Upload className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-gray-400">Subidos este Mes</p>
          </div>
          <p className="text-white">8 nuevos</p>
          <p className="text-green-400 mt-1">+2 vs mes anterior</p>
        </div>
      </div>
      
      <Resources />
      
      {/* Botón flotante para móvil */}
      <button className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-xl flex items-center justify-center z-30">
        <Upload className="w-6 h-6" />
      </button>
    </div>
  );
}
