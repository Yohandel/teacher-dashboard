import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function Analytics() {
  const performanceData = [
    { name: 'Sep', value: 15 },
    { name: 'Oct', value: 18 },
    { name: 'Elo M', value: 22 },
    { name: 'Apr', value: 25 },
    { name: 'Jun', value: 28 },
    { name: 'Jul', value: 24 },
    { name: 'Jul', value: 26 },
    { name: 'Apr', value: 27 },
    { name: 'Sep', value: 29 },
  ];

  const attendanceData = [
    { name: 'Nov', value: 18 },
    { name: 'Jan', value: 16 },
    { name: 'Jul', value: 22 },
    { name: 'Apr', value: 19 },
    { name: 'May', value: 24 },
    { name: 'Apr', value: 21 },
  ];

  return (
    <div className="bg-[#24272f] rounded-lg p-4 md:p-6">
      <h2 className="mb-4 md:mb-6">Analíticas</h2>
      
      {/* Performance Chart */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-xs md:text-sm">Rendimiento por Materia</h3>
          <Button variant="ghost" size="sm" className="text-gray-400 text-xs">
            Filtrar
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#666', fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#666', fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="value" fill="#4a4e57" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Attendance Chart */}
      <div>
        <h3 className="text-xs md:text-sm mb-3 md:mb-4">Asistencia Mensual</h3>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#666', fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#666', fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#5a5e67" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
