import logo from './logo.svg';
import './App.css';
import SidebarWithHeader from './Components/Sidebar';
import Transaction from './Pages/Transaction';
import ViewDJ from './Pages/ViewDJ';

function App() {
  return (
    <div className="App">
     <Transaction/>
     <ViewDJ/>
    </div>
  );
}

export default App;
