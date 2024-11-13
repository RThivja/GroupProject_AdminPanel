// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminPanel from './admin_panel/Admin';
import Dashboard from './admin_panel/assign_module';
import Login from './admin_panel/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<AdminPanel />} />  
          <Route path="/dash" element={<Dashboard />} />  
          <Route path="/login" element={<Login />} /> 
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
