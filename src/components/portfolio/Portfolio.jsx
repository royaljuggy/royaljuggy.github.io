import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/happy-emilia.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie File System',
    URL: "https://github.com/royaljuggy/mfs",
    demo: "https://github.com/royaljuggy/mfs/issues",
    secondBtnText: "Link to Issues",
    description: "Movie directory web application built in Python (Flask), React, MySQL"
  },
  {
    id: 2,
    image: IMG1,
    title: 'IDS Enterprise - Open Source Contribution',
    URL: "https://github.com/royaljuggy/ids-enterprise",
    demo: "https://github.com/infor-design/enterprise/commit/bed3d61fd36544c37c020d173e2b0d9f0a8c7328",
    secondBtnText: "Merged Commit",
  },
  {
    id: 3,
    image: IMG1,
    title: 'Diary Web Application',
    URL: "https://github.com/royaljuggy/diary-app",
    demo: "https://royaljuggy.github.io/diary-app",
  },
]

const Portfolio = () => {
  function btnText(secondBtnText) {
    return secondBtnText !== undefined ? secondBtnText : "Live Demo";
  }
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, URL, demo, secondBtnText, description}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="description">{description}</div>
                <div className="portfolio__item-cta">
                  <a href={URL} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary">{btnText(secondBtnText)}</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio