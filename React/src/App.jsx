import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'

function App() {

  return (

    <div className="bg-[#222831] h-screen grid">
      <Todo />
    </div>

  )
}

export default App
