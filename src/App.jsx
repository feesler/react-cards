import Card from './components/Card/Card.jsx';
import './App.css';
import image from './image.png';

function App() {
  return (
    <div className="cards-collection">
      <Card title="Card title" image={image}>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a className="btn btn-primary" href="#">Go somewhere</a>
      </Card>

      <Card title="Special title treatment">
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a className="btn btn-primary" href="#">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
