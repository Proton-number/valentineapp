import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Unique from './components/Unique';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/main/:userId' element={<Main />} />
          <Route path='/' element={<SignUp />} />
          <Route path='/unique/:userId' element={<Unique />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
