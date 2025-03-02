import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Status from "./Components/Status";
import { Routes, Route, Form } from "react-router-dom";
import PackingList from "./Components/PackingList";

function App({ items }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Status />} />
          <Route path="/Form" element={<Form items={items} />} />
          <Route path="/PackingList" element={<PackingList items={items} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
