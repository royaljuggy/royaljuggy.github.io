import React from 'react'
import resume from '../../assets/resumes/JAN2022.pdf'
import LetsTalkButton from '../global/LetsTalkButton'
const CTA = () => {
  return (
    <div className='cta'>
        {/* add download attribute to make downloadable */}
        <a href={resume} class="btn" download>Download Resume/CV</a>
        <LetsTalkButton/>
    </div>
  )
}

export default CTA