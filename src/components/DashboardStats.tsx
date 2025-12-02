export function DashboardStats() {
  const stats = [
    { label: 'Total de estudiantes', value: '30' },
    { label: 'Promedio general', value: '8.5' },
    { label: 'Asistencia promedio', value: '85%' },
    { label: 'Últimas actividades', value: '5' },
  ];

  return (
    <div className="bg-[#24272f] rounded-lg p-4 md:p-6">
      <h2 className="mb-4 md:mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#1a1d24] rounded-lg p-3 md:p-4">
            <div className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">{stat.label}</div>
            <div className="text-2xl md:text-3xl">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
