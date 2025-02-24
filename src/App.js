import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-blue-300">React App</h1>
        <p>React App with Docker</p>
        <div className="flex flex-row h-20 w-20">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
