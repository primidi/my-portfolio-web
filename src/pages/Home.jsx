import React from 'react';
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <section id="home" className="h-screen text-center flex justify-center items-center lg:justify-start animate-text-pop-up-top">
      <div className="home text-center md:text-left flex flex-col gap-2">
        <h3 className="text-md font-bold"><span className="text-brand-red">Frontend</span> Developer</h3>
        <h1 className="text-lg font-extrabold">Gharis <span className="text-brand-red">Primada</span> Hariyono</h1>
        <p className="mb-4 text-md lg:text-sm text-brand-red font-medium"><i className="fa-solid fa-location-dot"></i> Malang, East Java, Indonesia</p>
        <div className="button-group flex flex-col md:flex-row gap-2">
          <Button style="danger" text="Email" icon="fa-regular fa-envelope" />
          <Button style="primary" text="Linkedin" icon="fa-brands fa-linkedin" />
          <Button text="Github" icon="fa-brands fa-github" />
        </div>
      </div>
    </section>
  );
};

export default Home;
