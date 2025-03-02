import React from "react";
import "./App.css";
import Status from "./Components/Status";
import { Routes, Route, Form } from "react-router-dom";
import PackingList from "./Components/PackingList";

function App({ initialItems }) {
  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Status />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/PakingList" element={<PackingList initialItems={initialItems} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
