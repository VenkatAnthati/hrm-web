import logo from './logo.svg';
import './App.css';
import AppRouter from './router/Router';
import { Link, useNavigate } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
      <footer>
        © 2026 HRM Solutions. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
