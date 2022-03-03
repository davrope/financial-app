import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero'>
      <img className='hero-img' src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce"/>
      <div className='info'>
        <h1 className='info-title'>
          Take your financial control to the next level
        </h1>
        <p className='info-subtitle'>
          Create budgets and track your expenses with an easy integration.
        </p>
      </div>
      
    </section>
  )
}

export default HeroSection