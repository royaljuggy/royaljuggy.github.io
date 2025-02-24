import React from 'react'
import './info.css'
import LetsTalkButton from '../global/LetsTalkButton'

const Info = () => {
  return (
    <section id="info">
        <h5>Professional Identity</h5>
        <h2>Who am I?</h2>

        <div className="container info__container">
            <h3>Jacob Meksavanh</h3>
            <div className="info__content">
                Hello! My name is Jacob and I am currently a Honours, Undergraduate Computer Science studying at the University of Waterloo (Ontario, Canada).
                I entered this field of study due to daily use of software applications (including video games!) and my desire to build software that people can readily use.
                That's why I'm most interested in work that allows me to be the owner of a feature, software application, etc. 
                
                <br></br><br></br>
                
                <b>However!</b> That does not limit the types of positions
                I am open to. I am very, very interested in trying out development work that is out of my expertise or knowledge. For example, my co-op at Infor had me learning
                Angular, Kotlin, Cucumber and so much more on my own so that I could contribute to tasks. I found this extremely enjoyable as I could work at my own pace, but was still
                able to contribute to my team daily. <b>This position actually motivated me to learn React on my own</b>, which is why my personal portfolio website is now in React!

                <br></br><br></br>

                <h4>For interested employers, please reach out to me on LinkedIn or by email:</h4>
                <ul>
                    <li><a href="https://www.linkedin.com/in/jacob-meksavanh/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:jmeksava@uwaterloo.ca">Email</a></li>
                </ul>
                

                <br></br><br></br>

                <h4>And to wrap things up, some professional goals of mine are:</h4>
                <ul className="info__list">
                    <li>Build something that is known worldwide OR improves the living situation of others</li>
                    <li>Live and work in Japan (DONE!)</li>
                    <li>Work to develop software, not to earn money</li>
                </ul>

                <br></br><br></br>
                
                <h4>Spoken Languages</h4>
                <ul class="info__list">
					<li><strong>English</strong>: Native speaker</li>
					<li><strong>French</strong>: Elementary/classroom study</li>
					<li><strong>Japanese</strong>: Conversational (I've lived in Tokyo for 5 months)</li>
				</ul>
            </div>
            <LetsTalkButton/>
        </div>

    </section>
  )
}

export default Info