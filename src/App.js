// import ExpenseItem from "./components/ExpenseItem";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
