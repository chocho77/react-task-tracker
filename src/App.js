//import logo from './logo.svg';
//import './App.css';

function App() {
  const name = 'Chavdar';
  const x = true;
  return (
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h3>{x ? 'Yes' : 'No' }</h3>
    </div>
  );
}

export default App;
