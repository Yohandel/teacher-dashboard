import { AttendanceTable } from './AttendanceTable';
import { Calendar, TrendingUp, Users } from 'lucide-react';

export function AttendanceView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white mb-2">Asistencia</h1>
        <p className="text-gray-400">Control de asistencia de estudiantes</p>
      </div>
      
      {/* Stats de asistencia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400">Asistencia Hoy</p>
          </div>
          <p className="text-white">28/32 estudiantes</p>
          <p className="text-green-400 mt-1">87.5%</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-gray-400">Promedio Mensual</p>
          </div>
          <p className="text-white">92%</p>
          <p className="text-green-400 mt-1">↑ 3% vs mes anterior</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-gray-400">Ausencias del Mes</p>
          </div>
          <p className="text-white">24 faltas</p>
          <p className="text-orange-400 mt-1">8% del total</p>
        </div>
      </div>
      
      <AttendanceTable />
    </div>
  );
}
