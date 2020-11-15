import './App.css';
import ButtonAppBar from './modules/header/header'
import Body from './modules/body/body'
function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
      </header>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
