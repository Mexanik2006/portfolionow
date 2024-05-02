import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Home2 from './components/home/Home2';
import Navbar from "./components/navbar/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Home2 /> */}
      <Footer />
      {/* <div className="bg-slate-600 h-[100vh]"></div> */}
    </div>
  );
}

export default App;
