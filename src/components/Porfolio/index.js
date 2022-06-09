import React from 'react'
import './index.scss'
import img1 from './imgPorfolio/1_toquenElDom.png'
import img2 from './imgPorfolio/2_toDoListMERN.png'
import img3 from './imgPorfolio/3_impactoCovid19.png'
import img4 from './imgPorfolio/4_DjangoPOlls.png'
import img5 from './imgPorfolio/5_ipv4_network.png'
import img6 from './imgPorfolio/6_snake.png'
import img7 from  './imgPorfolio/7_Api_proyectoFinal_Vased_LMS.png'
import img8 from  './imgPorfolio/8_LMS_proyectoFinal_Vased.png'
//
import Loader from 'react-loaders'
//
//import AnimatedLetters from '../AnimatedLetters'
//import { useEffect, useState } from 'react'






const datos = [
  {
    id: 1,
    image: img1,
    title: 'Toquen el Dom',
    github: 'https://github.com/daniela8896/toquen-el-DOM',
    demo: 'https://daniela8896.github.io/toquen-el-DOM/'
  },
  {
    id: 2,
    image: img2,
    title: 'ToDoList mern',
    github: 'https://github.com/dariohimo/todolistmern',
    demo: 'https://todofrond.herokuapp.com/'
  },
  {
    id: 3,
    image: img3,
    title: 'Api Impacto Covid 19',
    github: 'https://github.com/Jhuset2003/Impacto_Covid-19_en_el_mundo',
    demo: 'hhttps://jhuset2003.github.io/Impacto_Covid-19_en_el_mundo/'
  },
  {
    id: 4,
    image: img4,
    title: 'SystemPolls',
    github: 'https://github.com/dariohimo/systempolls',
    demo: 'https://qqpolls.herokuapp.com/'
  },
  {
    id: 5,
    image: img5,
    title: 'Python ipv4_network',
    github: 'https://github.com/dariohimo/ipv4_network',
    demo: 'https://replit.com/@dariohimo/ipv4network?v=1'
  },
  {
    id: 6,
    image: img6,
    title: 'Python Turtle Play Snake',
    github: 'https://github.com/dariohimo/snake',
    demo: 'https://replit.com/@dariohimo/snake?v=1'
  },
  {
    id: 7,
    image: img7,
    title: 'LMS_VASED Proyecto Final Backend',
    github: 'https://github.com/dariohimo//vased-api',
    demo: 'https://vased-api.herokuapp.com/api/v1/'
  },
  {
    id: 8,
    image: img8,
    title: 'LMS_VASED Proyecto Final Frontend',
    github: 'https://github.com/Jhuset2003/VasedWeb',
    demo: 'https://vased-web.vercel.app/'
  },
]



const Portafolio = () => {
  
 



  return (
    <section id='portfolio'>
    
      
      
     

      <div className="container portfolio__container">

        {
          datos.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} className='img__portfolio'/>
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='__blank'>Repo</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Deploy</a>
                </div>
              </article>
            )
          })
       }

       
      </div>
      
      <Loader type="pacman" />

      
    </section>
  )
}

export default Portafolio