import { GradesTable } from './GradesTable';

export function GradesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white mb-2">Calificaciones</h1>
        <p className="text-gray-400">Gestiona las calificaciones de tus estudiantes</p>
      </div>
      
      <GradesTable />
      
      {/* Stats de calificaciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#23262f] rounded-2xl p-6">
          <p className="text-gray-400 mb-2">Promedio General</p>
          <p className="text-white">8.5</p>
          <div className="mt-2 w-full bg-[#1a1d24] rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <p className="text-gray-400 mb-2">Aprobados</p>
          <p className="text-white">85%</p>
          <p className="text-green-400 mt-1">↑ 5% vs mes anterior</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <p className="text-gray-400 mb-2">Calificaciones Pendientes</p>
          <p className="text-white">12</p>
          <p className="text-orange-400 mt-1">Requiere atención</p>
        </div>
      </div>
    </div>
  );
}
