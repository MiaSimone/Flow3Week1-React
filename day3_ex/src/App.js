import './App.css';
import FormDemo from './FormDemo';
import FormDemoMultiple from './FormDemoMultiple';
import LiftStateDemo from './LiftStateDemo';
import State from './State';

function App() {
  return (
    <div className="App">
      <h1>Forms, State and CRUD</h1>
      <FormDemo />
      <FormDemoMultiple />
      <State/>
      <LiftStateDemo />

    </div>
  );
}

export default App;
