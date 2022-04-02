import React from 'react';
import freedom from '../img/freedom.jpg';


const HeroSection = () => {

  return (
    <div style={{ alignItems:'center', height:'100vh', width:'100vw'}}>
        <div className='d-flex h-100 text-center text-white bg-dark' style={sectionStyle}>
            {/* <div  style= {{margin: 0, position:'relative', top:'5%'}}> */}
            <div  style= {{alignItems:'center', marginLeft:'auto', marginRight:'auto'}}>
            
                <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
                    <main className='px-3'>
                        
                        <h1 className='h1Header'>Take a step ahead to your financial freedom </h1>
                        <p className='lead'>Whether you are trying to save your hometown village or living a healthy life. Create budgets and track your expenses with an easy integration to reach your goals. </p>

                    </main>
                    
                </div>
            </div>
        </div>
    </div>
)
  // return (
  //   <section className='hero'>
  //     <img src = {freedom} alt = "Someone happy at a sunset" className='hero-img'>
         
  //     </img>
  //     {/* <img className='hero-img' src="https://i.postimg.cc/zD21m9fG/hero.png" alt="Pasta with pomodoro sauce"/> */}
  //     <div className='info'>
  //       <h1 className='info-title'>
  //         Take a step ahead to your financial freedom
  //       </h1>
  //       <p className='info-subtitle'>
  //             It's almost the end of the month and you don't know where is all your money? This is a very common problem.<br/>
  //             If you have control over your expenses, we promise you'll have inner peace in these days.<br/>
  //         Create budgets and track your expenses with an easy integration.
  //       </p>
  //     </div>
      
  //   </section>
  // )
}

var sectionStyle = {
  backgroundImage: `url(${freedom})`,
  backgroundSize: 'cover',
  alignItems:'center'

}
export default HeroSection