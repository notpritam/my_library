import React from 'react'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import './homepage.scss'

function HomePage() {
  return (
    <div className='main-container'>
    <Hero/>
    <Category/>
    <Trending/>
   
    </div>
   
  )
}

export default HomePage