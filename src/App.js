import './App.css';
import Carousel from './Components/Carousel';


function App() {
  return (
    <div className="app">
      <div className="app-text">
        <h1>Félix Fénéon: The Anarchist and the Avant-Garde</h1>
        <a href="https://press.moma.org/wp-content/uploads/2020/06/MoMA_FelixFeneon_Checklist.pdf">Inspired by the MoMA Exhibit</a>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
