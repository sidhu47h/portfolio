import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
