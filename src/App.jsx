import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './component/Weather-app/weather-app'


function App() {
  return (
    <div className="app">
      <WeatherApp/>
    </div>
  )
}

export default App

// npm create vite@latest