import React from 'react'
import Hero from "./section/hero"
import About from "./section/about"
import WhyUs from "./section/whyUs"
import WeeklyUpdates  from './section/weeklyUpdate'
import TestimonialSection from './section/testimonials'
import OurTeam from "./section/ourTeam"
const page = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <WhyUs/>
        <OurTeam/>
        <WeeklyUpdates/>
        <TestimonialSection/>
    
    </div>
  )
}

export default page