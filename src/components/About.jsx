import React from 'react'

import Profile from '../assets/me.jpg'
import { ABOUT_ME_DATA } from '../utils/data'

const About = () => {
  return (
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id='about'>
      <h5 className='text-primary uppercase text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14'>
        About Me
      </h5>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img className='w-full h-70 object-cover rounded-lg mb-4 md:mb-0' src={Profile} alt="Profile" />

        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6'>
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT_ME_DATA.introduction} <br /> {ABOUT_ME_DATA.background}{" "}
            {ABOUT_ME_DATA.interests}
          </p>
          <br/>

          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leadding-6'>
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-l md:grid-cols-3 gap-4 mt-5'>
        <InfoCard
          count = {ABOUT_ME_DATA.state.yearOfExperience}
          lable = "Years Of Experience"
        />

        <InfoCard
          count = {ABOUT_ME_DATA.state.numberOfProjects}
          lable = "Projects Completed Successfully"
        />

        <InfoCard
          count = {ABOUT_ME_DATA.state.certificationsEarned}
          lable = "Certifications Earned"
        />
      </div>
    </section>
  )
}

const InfoCard = ({lable, count }) => {
  return (
    <div className='bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 px-4 md:px-6 py-3'>
      <h6 className='text-primary text-xl md:text-2xl font-semibold'>{count}</h6>

      <span className='text-blue-300 text-xs md:text-sm font-thin'> {lable}</span>
    </div>
  )
}

export default About