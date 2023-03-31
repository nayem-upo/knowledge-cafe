import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bonus from './Components/Bonus/Bonus'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Bonus></Bonus>
    </div>
  )
}

export default App;
