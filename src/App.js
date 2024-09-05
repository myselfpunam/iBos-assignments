import './App.css';
import NavigationBar from './components/Navbar/NavigationBar';
import Categories from './components/Products/Products';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Categories></Categories>
    </div>
  );
}

export default App;
