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
              Track your expenses
            </h4>
            <p>
              Split your expenses in different categories so you can notice if you are reaching your financial goals.
            </p>
          </div>
        </div>

        <div id='about' className='card'>
          <img src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Export your data
            </h4>
            <p>
              If you want to use third party tools to analyze your data, you can easily export your information.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About