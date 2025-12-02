import { DashboardStats } from './DashboardStats';
import { Analytics } from './Analytics';

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Resumen general de tu panel educativo</p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Analytics />
        <div className="bg-[#23262f] rounded-2xl p-6">
          <h3 className="text-white mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            {[
              { action: 'Nueva calificación añadida', subject: 'Matemáticas', time: 'Hace 2 horas' },
              { action: 'Asistencia registrada', subject: 'Grupo 3A', time: 'Hace 4 horas' },
              { action: 'Recurso compartido', subject: 'Física', time: 'Hace 1 día' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-[#1a1d24] rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-white">{item.action}</p>
                  <p className="text-gray-400">{item.subject}</p>
                </div>
                <span className="text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
