import React from 'react';
import budget from '../img/budget.jpg';
import expenses from '../img/expenses.jpg';
import data from '../img/data.jpg';

const About = () => {
  return (
    <section className='about'>
      <h2 className='section-title'>
        About
      </h2>
      <div className='cards-grid'>
        <div id='about' className='card'>
          <img src={budget} alt="Human with a calculator" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Create a budget
            </h4>
            <p>
              We are sure you have <b>BIG</b> plans to accomplish. Creating budgets will help you meet your financial goals in the short and long term.
            </p>
          </div>
        </div>

        <div id='about' className='card'>
          <img src={expenses} alt="Human analyzing a pie chart" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Track your expenses
            </h4>
            <p>
              Split your expenses in different categories so you can notice if you are reaching your financial goals!
            </p>
          </div>
        </div>

        <div id='about' className='card'>
          <img src={data} alt="Human with a book labeled as data" className='about-img'/>
          <div className='text-card-container'>
            <h4>
              Export your data
            </h4>
            <p>
              Data is everywhere, and if you want to use third party tools to analyze your data, you can easily export all your information.
              Whenever you want.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About