import React from "react";
import { Routes, Route } from "react-router-dom";
import { Rooms } from "./features/rooms/Rooms";
import { Header } from "./features/header/Header";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="rooms" element={<Rooms />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <Link to="/rooms">Go to Room Page</Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
