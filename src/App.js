import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Protected from './routes/Protected';
function App() {
  return (
    <div className='App'>
      <Router>
        <Protected />
      </Router>
    </div>
  );
}

export default App;
