import React from 'react'
import Header from '../../component/Header'
import Intro from  './intro'
import About from  './About'
import Experiances from './Experiances'

function Home() {
  return (
    <div>
        <Header/>
        <div  className='bg-primary px-40 sm:px-5'>
        <Intro/>
        <About/>
        <Experiances/>
        </div>

    </div>
  )
}

export default Home