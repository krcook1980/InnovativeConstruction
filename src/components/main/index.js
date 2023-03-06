import React from 'react';

import ImageCard from '../ImageCard/ImageCard';

import {Excavation, Footings, Rocks, Utilities, Demo} from './images';
import fb from '../../assets/icons8-facebook-48.png'

import './style.css';

export default function Main() {
  return (
    <section className='page'>
      <h1 className='title'>Specializing in Luxury Home Excavation</h1>
      <p className='subText'>General Contractor | Licensed and Insured</p>
      <div className='bodyText'>
        <h2 className='heading' id='aboutUs'>About Us</h2>
        <p>
          We are a family owned and operated Excavating Contractor. We
          specialize in design builds, troubleshooting, and building the
          impossible! With 20 years in the business, we specialize in
          excavation, footings / foundations, and rock walls. We
          have the experience and equipment to get the job done. Attention to
          detail is everything. We utilize state of the art technology to bid,
          plan, survey, and execute every build, saving time and money while
          ensuring the highest quality of work.
        </p>
      </div>
      <h2 className='heading'>Services / Products</h2>
      <div className='services'>
        <ImageCard heading='Footings/Foundations' image={Footings} />
        <ImageCard heading='Excavation' image={Excavation}/>
        <ImageCard heading='Retaining Walls' image={Rocks} />
        <ImageCard heading='Utilities' image={Utilities} />
        <ImageCard heading='Concrete Demo' image={Demo} />
      </div>
      <a href="mailto:innovativeconstruction@outlook.com" className='button'>Contact Us</a>
      <div className='footer'>
        <div className='center'>
        <p className='heading'>Social</p>
        <a href='https://www.facebook.com/Innovative-Construction-Services-100988848713897/' target='_blank' rel="noreferrer">
        <img src={fb} alt='facebook link' />
        </a>
        </div>
        <div className='center'>
        <p className='heading'>Locations</p>
        <p>Park City, UT</p>
        <p>Deer Valley, Promontory, Glenwild</p>
        <p>Tuhaye, Black Hawk, Pine Brook</p>
        </div>
        <div className='center'>
            <a href='#aboutUs'>
        <p className='heading'>About Us</p>
        </a>
        </div>
      </div>
    </section>
  );
}
