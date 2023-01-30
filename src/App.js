import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./components/NavBar/NavBar"
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a MundoGamer"} />
    </div>
  );
}

export default App;
