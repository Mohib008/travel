import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Status from "./Components/Status";
import { Routes, Route, Form } from "react-router-dom";
import PackingList from "./Components/PackingList";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Status />} />
          <Route path="/" element={<Form />} />
          <Route path="/" element={<PackingList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
