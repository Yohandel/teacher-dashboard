import { Analytics } from './Analytics';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white mb-2">Analíticas</h1>
        <p className="text-gray-400">Visualiza el rendimiento y estadísticas</p>
      </div>
      
      {/* KPIs principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400">Rendimiento</p>
          </div>
          <p className="text-white">85%</p>
          <p className="text-green-400 mt-1">↑ 8%</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-gray-400">Estudiantes Activos</p>
          </div>
          <p className="text-white">124</p>
          <p className="text-gray-400 mt-1">En 4 grupos</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-gray-400">Tasa de Aprobación</p>
          </div>
          <p className="text-white">92%</p>
          <p className="text-green-400 mt-1">↑ 5%</p>
        </div>
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <p className="text-gray-400">Horas de Clase</p>
          </div>
          <p className="text-white">156h</p>
          <p className="text-gray-400 mt-1">Este semestre</p>
        </div>
      </div>
      
      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Analytics />
        
        <div className="bg-[#23262f] rounded-2xl p-6">
          <h3 className="text-white mb-4">Distribución por Materia</h3>
          <div className="space-y-4">
            {[
              { subject: 'Matemáticas', students: 32, color: 'bg-blue-500' },
              { subject: 'Física', students: 28, color: 'bg-purple-500' },
              { subject: 'Química', students: 24, color: 'bg-green-500' },
              { subject: 'Biología', students: 20, color: 'bg-orange-500' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">{item.subject}</span>
                  <span className="text-white">{item.students} estudiantes</span>
                </div>
                <div className="w-full bg-[#1a1d24] rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all`}
                    style={{ width: `${(item.students / 32) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tabla de top estudiantes */}
      <div className="bg-[#23262f] rounded-2xl p-6">
        <h3 className="text-white mb-4">Top 10 Estudiantes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400">Posición</th>
                <th className="text-left py-3 px-4 text-gray-400">Nombre</th>
                <th className="text-left py-3 px-4 text-gray-400">Promedio</th>
                <th className="text-left py-3 px-4 text-gray-400">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {[
                { pos: 1, name: 'Ana García', avg: 9.8, attendance: '98%' },
                { pos: 2, name: 'Carlos Ruiz', avg: 9.5, attendance: '95%' },
                { pos: 3, name: 'María López', avg: 9.3, attendance: '97%' },
                { pos: 4, name: 'Juan Pérez', avg: 9.1, attendance: '93%' },
                { pos: 5, name: 'Laura Martínez', avg: 9.0, attendance: '96%' },
              ].map((student) => (
                <tr key={student.pos} className="border-b border-gray-800">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-white
                        ${student.pos === 1 ? 'bg-yellow-500' : student.pos === 2 ? 'bg-gray-400' : student.pos === 3 ? 'bg-orange-600' : 'bg-gray-700'}
                      `}>
                        {student.pos}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white">{student.name}</td>
                  <td className="py-3 px-4 text-green-400">{student.avg}</td>
                  <td className="py-3 px-4 text-blue-400">{student.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
