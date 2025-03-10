import React from 'react'
import { PROFILE_DATA } from '../utils/data';
import Profile_pic from '../assets/profiles.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ImOpt } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { MdOutlineBadge } from 'react-icons/md';



const Hero = () => {
  const {
    name,
    tagline,
    jobtitle,
    yearOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;
  return (
    <section className='max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto'
    id='hero'>
        <div className='flex-l text-center md:text-left z-[1]'>
          <span className='text-xs md:text-sm text-blue-200 font-thin'>A Front-End Developer</span>

          <h2 className='text-3xl mt-3 md:text-5xl md:mt-5'>{name} 👋</h2>

          <p className='w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8'>{tagline}</p>

          <button className='primary-btn'>Contact Me</button>
        </div>
        <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]'>
          <div className='w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6'>
            <div className='flex items-center justify-center'>
              <img className='hero-img' src={Profile_pic} alt="img one" />
            </div>

            <div className='bg-cardbg rounded-md text-center mt-3 p-4'>
              <h5 className='text-sm md:text-base text-white'>{name}</h5>
              <p className='text-slate-500 text-xs md:font-medium mt-1'>{jobtitle}</p>

              <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
                <HiOutlineLocationMarker/>
                <p className='font-medium'>{location}</p>
              </div>
            </div>

            <div className='p-2'>
                <InfoTile
                  icon = {<FiMail size={20} className='text-sky-400'/>}
                  text={email}
                />

                <InfoTile
                  icon = {<MdOutlineBadge size={20} className='text-sky-400'/>}
                  text={`${yearOfExperience} Years Of Experience`}
                />
            </div>

            <div className='flex items-center gap-2 flex-wrap mb-5 justify-center'>
              {skills.map((item) => (
                <div key={item} className='text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1'>
                    {item}
                </div>
              ))}
            </div>

            <div className='flex items-center gap-6 flex-wrap justify-center'>
              <div className='bg-blue-800/30 p-2 rounded'>
                <FaGithub className='text-lg md:text-xl'/>
              </div>

              <div className='bg-blue-800/30 p-2 rounded'>
                <FaLinkedin className='text-lg md:text-xl'/>
              </div>

              {/* <div className='bg-blue-800/30 p-2 rounded'>
                <FaXTwitter className='text-lg md:text-xl'/>
              </div> */}

              <div className='bg-blue-800/30 p-2 rounded'>
                <FaFacebook className='text-lg md:text-xl'/>
              </div>

              <div className='bg-blue-800/30 p-2 rounded'>
                <FaInstagram className='text-lg md:text-xl'/>
              </div>

              {/* <div className='bg-blue-800/30 p-2 rounded'>
                <FaTiktok className='text-lg md:text-xl'/>
              </div> */}

            </div>
          </div>
        </div>

        <div className='ui-circle absolute top-6 md:top-10 -let-10 md:left-0'></div>
    </section>
  )
}

const InfoTile =({icon, text}) => {
  return (
    <div className='flex items-center gap-4 bg-ardbg p-4 mt-3 rounded-md'>
      {icon}
    <p className='text-xs md:text-sm font-normal'>{text}</p>
  </div>
  )
  
}

export default Hero