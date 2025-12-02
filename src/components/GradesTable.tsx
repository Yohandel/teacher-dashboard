import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Plus } from 'lucide-react';
import { useState } from 'react';

export function GradesTable() {
  let gradesArray = [
    { name: 'Juan', lastName: "Martínez", date: 'Sep 15', subject: 'Matemáticas', grade: '5' },
    { name: 'Sonia', lastName: "Groves", date: 'Sep 10', subject: 'Ciencias', grade: '8.5' },
    { name: 'Carlos', lastName: "Mejía", date: 'Sep 15', subject: 'Atlética', grade: '8' },
    { name: 'Ana', lastName: "Rodríguez", date: 'Sep 12', subject: 'Historia', grade: '9' },
    { name: 'Juan', lastName: "Torres", date: 'Sep 14', subject: 'Matemáticas', grade: '7.5' },
    { name: 'María', lastName: "López", date: 'Sep 11', subject: 'Inglés', grade: '8.8' },
    { name: 'Pedro', lastName: "Sánchez", date: 'Sep 13', subject: 'Física', grade: '7' },
    { name: 'Laura', lastName: "Díaz", date: 'Sep 16', subject: 'Química', grade: '9.2' },
  ];
  const [searchText, setSearchText] = useState('');
  const [grades, setGrades] = useState(gradesArray);

  const toggleInputSearch = (text:string) =>{
    if (text.length < 1 || text == "") {
      setGrades(gradesArray)
      return
    }
    setSearchText(text)
  }

  const searchTable = () => {
    let filteredGrades = gradesArray.filter((grade: any) => grade.name == searchText)
    setGrades(filteredGrades)
  }
  return (
    <div className="bg-[#24272f] rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2>Calificaciones</h2>
        <div className="flex gap-2">
          {/* Mobile: Plus button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5" />
          </Button>
          {/* Desktop: Search button */}
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
              <th className="text-left pb-3">Fecha</th>
              <th className="text-left pb-3">Materia</th>
              <th className="text-left pb-3">Calificación</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">{grade.name} {grade.lastName}</td>
                <td className="py-3 text-gray-400">{grade.date}</td>
                <td className="py-3 text-gray-400">{grade.subject}</td>
                <td className="py-3">{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 max-h-[400px] overflow-y-auto">
        {grades.map((grade, index) => (
          <div key={index} className="bg-[#1a1d24] rounded-lg p-3 hover:bg-[#2a2d34] transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="mb-1">{grade.name} {grade.lastName}</div>
                <div className="text-gray-400 text-xs">{grade.subject}</div>
              </div>
              <div className="text-xl">{grade.grade}</div>
            </div>
            <div className="text-gray-400 text-xs">{grade.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}