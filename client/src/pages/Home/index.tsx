import React from 'react'
import Header from '../../component/Header'
import Intro from './intro'
import About from './About'
import Experiances from './Experiances'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './contact'
import Footer from './Footer'
import LeftSide from './LeftSide'


function Home() {
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experiances />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
        <LeftSide />
      </div>

    </div>
  )
}

export default Home