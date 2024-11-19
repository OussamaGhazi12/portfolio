import React from 'react';
import hello from '../asset/2339864.png';
import github from '../asset/2111432.png';
import facebook from '../asset/2175193.png';
import instagram from '../asset/1384031.png';
import twitter from '../asset/5968958.png';
import linkedin from '../asset/14715341.png';
import js from '../asset/1199124.png';
import php from '../asset/5968332.png';
import html from '../asset/888859.png';
import css from '../asset/5968242.png';
import react from '../asset/3459528.png';
import python from '../asset/5968350.png';
import sql from '../asset/14955702.png';
import bootstrap from '../asset/5968672.png';
import nodejs from '../asset/15484303.png';
import yBrandImage from '../asset/S3.jpg';
import yBrandImages from '../asset/s1.jpg';
import gfImage from '../asset/S5.jpg';


import './style.css'; // Assurez-vous que le chemin est correct
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  return (
    <>
      <div className="container-fluid">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div id="name"className="col-6 text-white">
        
          Oussama</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#projects">Projects</a>
              </li>
            </ul>
            <button className="btn bg-danger btn-light d-flex align-items-center justify-content-center">
  <a className="nav-link text-white d-flex align-items-center justify-content-center" href="#hireMe">
    <i className="fas fa-user me-2"></i> Hire Me
  </a>
</button>

          </div>
        </nav>

        {/* Hero Section */}
        <h3 className="greeting" id='home'>
          Hello <img src={hello} alt="Hello" className="icon" />
        </h3>
        <h1 className="title">I’m a Web <br />Developer</h1>
        <p className="description">I build things for the web</p>

        <ul className="social-icons">
          <li><img src={github} alt="GitHub" className="social-icon" /></li>
          <li><img src={twitter} alt="Twitter" className="social-icon" /></li>
          <li><img src={linkedin} alt="LinkedIn" className="social-icon" /></li>
          <li><img src={facebook} alt="Facebook" className="social-icon" /></li>
          <li><img src={instagram} alt="Instagram" className="social-icon" /></li>
        </ul>

        {/* Experience Section */}
        <section className="experience-section">
          <footer className="experience-footer">
            <div className="experience-info">
              <h1 className="experience-number">3</h1>
              <p>Years of <br />Experience</p>
            </div>
            <div className="experience-info">
              <h1 className="experience-number">12</h1>
              <p>Projects Completed <br /> Around the World</p>
            </div>
            <ul className="technologies">
              <li><img src={js} alt="JavaScript" className="tech-icon" /></li>
              <li><img src={css} alt="CSS" className="tech-icon" /></li>
              <li><img src={html} alt="HTML" className="tech-icon" /></li>
              <li><img src={react} alt="React" className="tech-icon" /></li>
              <li><img src={php} alt="PHP" className="tech-icon" /></li>
            </ul>
          </footer>
        </section>

        {/* About Section */}
        <div>
          <h1 id="about" className='about'>About Me</h1>
          <p className='pabout'> As a Web Developer, I am responsible for designing and <br></br>developing web pages. My primary focus is to create responsive, <br></br>user-friendly experiences that meet the needs of a diverse online audience.</p>
          <h1 id="skills" className="skills">My Skills</h1>
          <p className="pskills">Technologies I've been working with recently:</p>
          <ul className="technologies">
            <li><img src={js} alt="JavaScript" className="tech-icon" /></li>
            <li><img src={css} alt="CSS" className="tech-icon" /></li>
            <li><img src={html} alt="HTML" className="tech-icon" /></li>
            <li><img src={react} alt="React" className="tech-icon" /></li>
            <li><img src={php} alt="PHP" className="tech-icon" /></li>
          </ul>
          <ul className="technologies">
            <li><img src={python} alt="Python" className="tech-icon" /></li>
            <li><img src={sql} alt="SQL" className="tech-icon" /></li>
            <li><img src={nodejs} alt="Node.js" className="tech-icon" /></li>
            <li><img src={bootstrap} alt="Bootstrap" className="tech-icon" /></li>
          </ul>
        </div>

        {/* Projects Section */}
        <div id="projects" className="container mt-5">
          <div className="row justify-content-center">
            {/* YBrand Project Card */}
            <div className="col-md-5 mb-4">
              <div className="project-card">
                <img src={yBrandImage} alt="YBrand" />
                <div className="project-card-body">
                  <div className="project-title">YBrand: Gestion des Produits et Suivi des Stocks</div>
                  <p className="project-description">
                    Développement d'une application complète de gestion des produits, suivi des stocks, ventes et commandes.
                  </p>
                  <a href="#" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            {/* Another YBrand Project Card */}
            <div className="col-md-5 mb-4">
              <div className="project-card">
                <img src={yBrandImages} alt="YBrand"  />
                <div className="project-card-body">
                  <div className="project-title">YBrand: Gestion des Produits et Suivi des Stocks</div>
                  <p className="project-description">
                    Développement d'une application complète de gestion des produits, suivi des stocks, ventes et commandes.
                  </p>
                  <a href="#" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>

            {/* GF Project Card */}
            <div className="col-md-5 mb-4">
              <div className="project-card">
                <img src={gfImage} alt="GF" />
                <div className="project-card-body">
                  <div className="project-title">GF: Analyse des Followers & Création de Contenu</div>
                  <p className="project-description">
                    Analyse des followers, création de contenu pertinent et utilisation des outils de gestion pour augmenter l'engagement.
                  </p>
                  <a href="#" className="project-link">Voir le projet</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form action="" id="hireMe">
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter your Email" required />
            <input type="text" placeholder="Enter your Subject" required />
            <textarea placeholder="Enter your Message" required rows="5" cols="40"></textarea>
            <input type="submit" value="Submit" className="send" />
          </form>
        </div>
      </div>
    </>
  );
}
