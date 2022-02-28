import React from 'react'
import Cross from '../components/Cross'
import PersonalInfo from '../components/PersonalInfo'
import Title from '../components/Title'
import AboutServices from '../components/AboutServices'

function About() {
  return (
    <div className='page_layout'>
          <Title span={'A'} title={'bout'}  />
     <Cross/>
     <PersonalInfo/>
     <AboutServices/>
    </div>
  )
}

export default About
