import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styled from "styled-components"
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
// import Container from "./Container" 

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
