import React from 'react';
import Button from '../components/Button/Button';
import profilePic from '../assets/profile-pic.svg';

const Home = () => {
  return (
    <main id="home" className="h-screen mx-7 space-y-4 content-center text-center lg:flex lg:justify-between lg:text-left lg:mx-48">
      <img className="h-2/5 mx-auto lg:self-center" src={profilePic} alt='Profile Picture' />
      <div className="typography space-y-2 lg:self-center">
        <h3 className="text-lg font-bold"><span className="text-brand-red">Frontend</span> Developer</h3>
        <h1 className="text-2xl font-extrabold">Gharis <span className="text-brand-red">Primada</span> Hariyono</h1>
        <p className="text-md text-brand-red font-medium"><i className="fa-solid fa-location-dot"></i> Malang, East Java, Indonesia</p>
        <p className="text-sm font-light">Hi, I’m a Frontend Developer who aspire to be a Super Software Engineer.</p>
        <div className="button-group space-x-2">
          <Button style='danger' text='Email' icon='fa-regular fa-envelope' />
          <Button style='primary' text='Linkedin' icon='fa-brands fa-linkedin' />
        </div>
      </div>
    </main>
  );
};

export default Home;
