import Hero from './components/Hero';
import Navbar from './components/Nabvar';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Navbar/>
        <Hero/>
    </div>
  );
}

export default App;
