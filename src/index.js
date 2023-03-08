import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'
import ContentGrid from './components/ContentGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </header>      
    <div className='container'>
      <NavBar></NavBar>
      <div className='middlebar'>
        <div className='flex-container'>
        <div class="block-container">
        <h1>Cody Beumer</h1>
        <p>Lead Software Developer at <b>ImageTrend Inc.</b></p>
        <i className='bio'>A highly motivated individual who thrives in a community of learners</i>
        <div className='flex-container'>
          <a href="https://www.linkedin.com/in/cody-beumer-011779108/" target='_blank'>LinkedIn</a>
          <b> | </b>
          <a href="https://github.com/CodyBeumer" target='_blank'>GitHub</a>
        </div>
        </div>
        <img src="https://media.licdn.com/dms/image/D5603AQF_IKtHh6gyMw/profile-displayphoto-shrink_400_400/0/1675807798113?e=1683763200&v=beta&t=idWFJ7fNI8ThJi0-WkrhkpsdyqnFVdkBbV51EjX9pLg" alt="https://www.w3schools.com/howto/img_avatar.png" class="profile"></img>
        </div>

        {/*All icons from https://devicon.dev/ */}
        <h3>Languages</h3>
        <div className='flex-container'>
          <div className='language-container'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <span>Java</span>
          </div>
          <div className='language-container'>
            <i className='language devicon-cplusplus-plain'></i>
            <span>C++</span>
          </div>
          <div className='language-container'>
          <i className='language devicon-html5-plain'></i>
            <span>HTML5</span>
          </div>
          <div className='language-container'>
          <i className='language devicon-javascript-plain'></i>
            <span>JavaScript</span>
          </div>
          <div className='language-container'>
          <i className='language devicon-csharp-plain'></i>
            <span>C#</span>
          </div>
          <div className='language-container'>
          <i className='language devicon-microsoftsqlserver-plain'></i>
            <span>MSSQL</span>
          </div>
        </div>
        
        <h3>Frameworks</h3>
        <div className='flex-container'>
        <div className='language-container'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knockout/knockout-plain-wordmark.svg" />
            <span>Knockout.js</span>
          </div>
          <div className='language-container'>
          <i className='language devicon-react-original'></i>
            <span>ReactJS</span>
          </div>
          <div className='language-container'>
            <i className='language devicon-dot-net-plain'></i>
            <span>.NET</span>
          </div>
          <div className='language-container'>
            <i className='language devicon-dotnetcore-plain'></i>
            <span>.NET Core</span>
          </div>
        </div>

        <h3>Technologies & Software</h3>
        <div className='flex-container'>
          <div className='language-container'>
              <i className='language devicon-git-plain'></i>
              <span>git</span>
          </div>
          <div className='language-container'>
              <i className='language devicon-visualstudio-plain'></i>
              <span>Visual Studio</span>
          </div>
          <div className='language-container'>
              <i className='language devicon-vscode-plain'></i>
              <span>vscode</span>
          </div>
        </div>


        <h3>Personal Projects</h3>
        <div className='content-container'>
          <ContentGrid></ContentGrid>
          <ContentGrid></ContentGrid>
          <ContentGrid></ContentGrid>
        </div>
      </div>
  </div>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
