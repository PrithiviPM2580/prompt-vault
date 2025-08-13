import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <main className="app">
      <MainRoutes />
    </main>
  )
}

export default App