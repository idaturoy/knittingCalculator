import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import TabNavigation from '../components/TabNavigation/TabNavigation';



function App() {
  return (
    <div className="App">
      <header className="App-Container Margin-Header">
        <h1 className="Margin-Heading">Knitting Calculator</h1>
        <span className="Description">This knitting calculator gives you the expected circumference of your garment based on the number of stiches and your gauge.</span>
      </header>
      <div className='App-Container'>
        <TabNavigation />
      </div>


    </div>
  );
}

export default App;
