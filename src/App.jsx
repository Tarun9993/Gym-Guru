import React from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Information from './Components/Information'
import About from './Components/About'

function App() {
  return (
  <div className='bg-black h-full w-full'>
  <Navbar />
  <Carousel />
  <Information />
  <About />
  </div>
  )
}

export default App