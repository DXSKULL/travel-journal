import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from "./data"

function App() {
 const cards = data.map(item => 
  <Card
    key={item.id} 
    {...item}
  />
 )
  return (
    <div>
     <Navbar />
     <div className="cards">
      {cards}
     </div>
     
    </div>
  );
}

export default App;

