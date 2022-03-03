import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <h2 className='section-title'>
        About
      </h2>
      <div className='cards-grid'>
        <div id='about' className='card'>
          <img src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Create a budget
            </h4>
            <p>
              We have the best tools so you can create a budget based on your income and goals.
            </p>
          </div>
        </div>

        <div id='about' className='card'>
          <img src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Create a budget
            </h4>
            <p>
              We have the best tools so you can create a budget based on your income and goals.
            </p>
          </div>
        </div>

        <div id='about' className='card'>
          <img src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Create a budget
            </h4>
            <p>
              We have the best tools so you can create a budget based on your income and goals.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About