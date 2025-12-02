import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { BottomNavigation } from './components/BottomNavigation';
import { DashboardView } from './components/DashboardView';
import { GradesView } from './components/GradesView';
import { AttendanceView } from './components/AttendanceView';
import { ResourcesView } from './components/ResourcesView';
import { AnalyticsView } from './components/AnalyticsView';
import Swal from 'sweetalert2'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName] = useState('Prof. Juan Pérez'); // En producción vendría de la autenticación

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Seguro que quieres cerrar sesión?",
      icon: "warning",
      background:"#0000009d",
      color:"#fff",
      backdrop:"#00000082",
      showCancelButton: true,
      confirmButtonColor: "rgb(79, 79, 233);",
      cancelButtonColor: "rgba(186, 52, 52, 1)",
      confirmButtonText: "Sí",
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setIsAuthenticated(false);
        setShowSignup(false);
        setCurrentView('dashboard');
      }
    });

  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  // Mostrar Login si no está autenticado
  if (!isAuthenticated && !showSignup) {
    return (
      <LoginPage
        onLogin={handleLogin}
        onSwitchToSignup={() => setShowSignup(true)}
      />
    );
  }

  // Mostrar Signup si no está autenticado y quiere registrarse
  if (!isAuthenticated && showSignup) {
    return (
      <SignupPage
        onSignup={handleSignup}
        onSwitchToLogin={() => setShowSignup(false)}
      />
    );
  }

  // Renderizar la vista actual
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'grades':
        return <GradesView />;
      case 'attendance':
        return <AttendanceView />;
      case 'resources':
        return <ResourcesView />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <DashboardView />;
    }
  };

  // Mostrar Dashboard si está autenticado
  return (
    <div className="min-h-screen bg-[#1a1d24] text-white">
      {/* Sidebar */}
      <Sidebar
        userName={userName}
        currentView={currentView}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Header */}
      <MobileHeader
        currentView={currentView}
        onMenuToggle={() => setIsSidebarOpen(true)}
      />

      {/* Main Content */}
      <div className="md:ml-72 min-h-screen">
        <div className="p-4 md:p-8 pt-20 md:pt-8 pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <BottomNavigation
        currentView={currentView}
        onNavigate={handleNavigate}
      />
    </div>
  );
}