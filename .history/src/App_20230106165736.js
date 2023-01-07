import './App.css';
import Search from  './components/search/search';

function App() {

  const handleOnChange =(searchData) =>{
    console.log(searchData);
  }

  return (
    <div className="App">
          <Search  onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
