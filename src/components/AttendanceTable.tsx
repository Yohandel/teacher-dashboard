import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';

export function AttendanceTable() {
  const attendanceArray = [
    { name: 'Juan', lastName: 'Martínez', enrollment: '2023001', date: 'Oct 24', status: 'Presente', checked: true },
    { name: 'Sonia', lastName: 'Groves', enrollment: '2023002', date: 'Oct 24', status: 'Presente', checked: true },
    { name: 'Carlos', lastName: 'Mejía', enrollment: '2023003', date: 'Oct 24', status: 'Ausente', checked: false },
    { name: 'Ana', lastName: 'Rodríguez', enrollment: '2023004', date: 'Oct 24', status: 'Presente', checked: true },
    { name: 'Juan', lastName: 'Torres', enrollment: '2023005', date: 'Oct 24', status: 'Tardanza', checked: true },
    { name: 'María', lastName: 'López', enrollment: '2023006', date: 'Oct 24', status: 'Presente', checked: true },
    { name: 'Pedro', lastName: 'Sánchez', enrollment: '2023007', date: 'Oct 24', status: 'Presente', checked: true },
    { name: 'Laura', lastName: 'Díaz', enrollment: '2023008', date: 'Oct 24', status: 'Ausente', checked: false },
  ];

  const toggleAttendance = (index: number) => {
    const newAttendance = [...attendance];
    newAttendance[index].checked = !newAttendance[index].checked;
    setAttendance(newAttendance);
  };
  const [attendance, setAttendance] = useState(attendanceArray)
  const [searchText, setSearchText] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Presente':
        return 'bg-green-600 hover:bg-green-700';
      case 'Ausente':
        return 'bg-red-600 hover:bg-red-700';
      case 'Tardanza':
        return 'bg-yellow-600 hover:bg-yellow-700';
      default:
        return 'bg-gray-600';
    }
  };

  const toggleInputSearch = (text: string) => {
    if (text.length < 1 || text == "") {
      setAttendance(attendanceArray)
      return
    }
    setSearchText(text)
  }

  const searchTable = () => {
    let filteredAttendance = attendanceArray.filter((attendance: any) => attendance.name == searchText || attendance.lastName == searchText)
    setAttendance(filteredAttendance)
  }

  return (
    <div className="bg-[#24272f] rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2>Asistencia</h2>
        <div className="flex items-center justify-between">
          <Input onChange={(e) => toggleInputSearch(e.target.value)} className="searchBarInput"></Input>
          <Button onClick={searchTable} variant="ghost" size="sm" className="hidden md:flex text-gray-400 text-xs md:text-sm">
            <Search className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Buscar
          </Button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-700">
              <th className="text-left pb-3">Nombre del estudiante</th>
              <th className="text-left pb-3">Matrícula</th>
              <th className="text-left pb-3">Fecha</th>
              <th className="text-left pb-3">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">{record.name} {record.lastName}</td>
                <td className="py-3 text-gray-400">{record.enrollment}</td>
                <td className="py-3 text-gray-400">{record.date}</td>
                <td className="py-3">
                  <Badge className={`${getStatusColor(record.status)} text-white border-0`}>
                    {record.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Checkbox List */}
      <div className="md:hidden space-y-3 max-h-[400px] overflow-y-auto">
        {attendance.map((record, index) => (
          <div key={index} className="bg-[#1a1d24] rounded-lg p-3 flex items-center gap-3">
            <Checkbox
              checked={record.checked}
              onCheckedChange={() => toggleAttendance(index)}
              className="border-gray-600"
            />
            <div className="flex-1">
              <div className="mb-1">{record.name} {record.lastName}</div>
              <div className="text-gray-400 text-xs">Mat: {record.enrollment}</div>
            </div>
            <Badge className={`${getStatusColor(record.status)} text-white border-0 text-xs`}>
              {record.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
