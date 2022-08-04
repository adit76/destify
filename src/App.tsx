import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { Rooms } from './features/rooms/Rooms';
import { Header } from './features/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="rooms" element={<Rooms />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
