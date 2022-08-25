import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/icon.png'

// === Swiper Imports
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// === TODO - could include co-op reviews.
const data = [
  {
    avatar: AVATAR1,
    name: 'Emilia',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident assumenda cum facilis harum magnam ut, fuga pariatur nesciunt neque.",
  },
  {
    avatar: AVATAR1,
    name: 'Emilia',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident assumenda cum facilis harum magnam ut, fuga pariatur nesciunt neque.",
  },
  {
    avatar: AVATAR1,
    name: 'Emilia',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident assumenda cum facilis harum magnam ut, fuga pariatur nesciunt neque.",
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials