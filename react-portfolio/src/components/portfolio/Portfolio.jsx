import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/happy-emilia.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'DUMMY TITLE',
    URL: "https:://github.com",
    demo: "https:://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: IMG1,
    title: 'DUMMY TITLE2',
    URL: "https:://github.com",
    demo: "https:://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: IMG1,
    title: 'DUMMY TITLE3',
    URL: "https:://github.com",
    demo: "https:://dribbble.com/Alien_pixels",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, URL, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={URL} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
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