import React from 'react'
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';
import {cards, projects} from '../../data';
import "./Home.scss";


const Home = () => {
  return (
    <div className='home'>
       <Featured/>
       <TrustedBy />
       <Slide slidesToShow={5} arrowsScroll={5}>
{cards.map(card=>(
  <CatCard key={card.id} item ={card}/>
))}
        </Slide>

        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              
              <div className="title">
                <img src="./img/check.png" alt="" />
               
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
                
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>

              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
              
            </div>
            <div className="item">
              <video src="./img/video.mp4" controls></video>
            </div>
          </div>
        </div>




        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>fiverr business</h1>
              <h1>Advanced solutions and professional talent for businesses</h1>
              <h5>Upgrade to a curated experience packed with tools and benefits,decided to businesss</h5>
             
              <div className="title">
                <img src="./img/check.png" alt="" />
                Access top freelancers and professional business tools for any project
              </div>

              <div className="title">
                <img src="./img/check.png" alt="" />
                Build your own branded marketplace of certified experts
              </div>

              <div className="title">
                <img src="./img/check.png" alt="" />
                Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
              </div>
                  <button>Explore Fiverr Business</button>
            </div>
            <div className="item">
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
            </div>
          </div>
        </div>
  
        <Slide slidesToShow={4} arrowsScroll={4}>
{projects.map(card=>(
  <ProjectCard key={card.id} item ={card}/>
))}
        </Slide>

    </div>
  )
}

export default Home