import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import TabNavigation from '../components/TabNavigation/TabNavigation';



function App() {
  return (
    <div className="App">
      <h1 className="Margin-Heading">Knitting calculator</h1>
      <div className='App-Container'>
        <TabNavigation />
      </div>
    </div>
  );
}

export default App;
