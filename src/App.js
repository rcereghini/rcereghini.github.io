import React, { Component } from 'react';
import './App.css';

import Blocks from './blocks.jpg';
import Wireface from './facial-recognition.jpg';
import Robot from './robofriend.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="tc pv2 pv4-ns rc-header">
          <img src="http://www.cleartitleaz.com/wp-content/uploads/2016/02/2017cleartitlejune-32-e1499728094430.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
          <h1 className="f5 f4-ns fw6 white">Robert Cereghini</h1>
          <h2 className="f6 white fw2 ttu tracked">Full-Stack Web Developer</h2>
        </header>
        <section style={{backgroundImage:"url('https://media0.giphy.com/media/BHNfhgU63qrks/giphy.gif')"}} className="tc-l bg-center cover bg-black">
  <div className="w-100 ph3 pv5 bg-black-80">
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://facebook.com" title="Facebook">
      <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
      <span className="f6 ml3 pr2">Facebook</span>
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://github.com/mrmrs" title="GitHub">
      <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
      <span className="f6 ml3 pr2">GitHub</span>
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://linkedin.com" title="LinkedIn">
      <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
      <span className="f6 ml3 pr2">LinkedIn</span>
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/mrmrs_" title="Twitter">
      <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
      <span className="f6 ml3 pr2">Twitter</span>
    </a>
    <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2" href="http://codepen.io" title="CodePen">
      <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.988 5.443c-.004-.02-.007-.04-.012-.058l-.01-.033c-.006-.017-.012-.034-.02-.05-.003-.012-.01-.023-.014-.034l-.023-.045-.02-.032-.03-.04-.024-.03c-.01-.013-.022-.026-.034-.038l-.027-.027-.04-.032-.03-.024-.012-.01L8.38.117c-.23-.155-.53-.155-.76 0L.305 4.99.296 5c-.012.007-.022.015-.032.023-.014.01-.027.02-.04.032l-.027.027-.034.037-.024.03-.03.04c-.006.012-.013.022-.02.033l-.023.045-.015.034c-.007.016-.012.033-.018.05l-.01.032c-.005.02-.01.038-.012.058l-.006.03C.002 5.5 0 5.53 0 5.56v4.875c0 .03.002.06.006.09l.007.03c.003.02.006.04.013.058l.01.033c.006.018.01.035.018.05l.015.033c.006.016.014.03.023.047l.02.03c.008.016.018.03.03.042.007.01.014.02.023.03.01.012.02.025.034.036.01.01.018.02.028.026l.04.033.03.023.01.01 7.31 4.876c.116.078.248.117.382.116.134 0 .266-.04.38-.116l7.314-4.875.01-.01c.012-.007.022-.015.032-.023.014-.01.027-.02.04-.032l.027-.027.034-.037.024-.03.03-.04.02-.032.023-.046.015-.033.018-.052.01-.033c.005-.02.01-.038.013-.058 0-.01.003-.02.004-.03.004-.03.006-.06.006-.09V5.564c0-.03-.002-.06-.006-.09l-.007-.03zM8 9.626L5.568 8 8 6.374 10.432 8 8 9.626zM7.312 5.18l-2.98 1.993-2.406-1.61 5.386-3.59v3.206zM3.095 8l-1.72 1.15v-2.3L3.095 8zm1.237.828l2.98 1.993v3.208l-5.386-3.59 2.406-1.61zm4.355 1.993l2.98-1.993 2.407 1.61-5.387 3.59v-3.206zM12.905 8l1.72-1.15v2.3L12.905 8zm-1.237-.827L8.688 5.18V1.97l5.386 3.59-2.406 1.61z" fill-rule="nonzero"/></svg>
      <span className="f6 ml3 pr2">Code Pen</span>
    </a>
  </div>
</section>
  <section className="cf center w-80 pa2-ns">
    <b className="db f2 mb1 pa4">
      Completed Projects
    </b>
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img style={{backgroundImage:`url(${Wireface})`}}
      className="grow db bg-center cover aspect-ratio--object" />
    </div>
    <a href="#0" className="ph2 ph0-ns pb3 link db">
      <h3 className="f5 f4-ns mb0 black-90">Face Counter</h3>
      <h3 className="f6 f5 fw4 mt2 black-60">React, Javascript, Node.js, PostgreSQL</h3>
    </a>
  </article>
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img style={{backgroundImage:`url(${Blocks})`}}
      className="grow db bg-center cover aspect-ratio--object" />
    </div>
    <a href="#0" className="ph2 ph0-ns pb3 link db">
      <h3 className="f5 f4-ns mb0 black-90">Block Breaker</h3>
      <h3 className="f6 f5 fw4 mt2 black-60">Unity, C#</h3>
    </a>
  </article>
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img style={{backgroundImage:`url(${Robot})`}}
      className="grow db bg-center cover aspect-ratio--object" />
    </div>
    <a href="#0" className="ph2 ph0-ns pb3 link db">
      <h3 className="f5 f4-ns mb0 black-90">Robofriends</h3>
      <h3 className="f6 f5 fw4 mt2 black-60">React, Javascript, Node.js, Redux</h3>
    </a>
  </article>
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div className="aspect-ratio aspect-ratio--1x1">
      <img style={{backgroundImage:"url('http://mrmrs.github.io/images/0004.jpg')"}}
      className="grow db bg-center cover aspect-ratio--object" />
    </div>
    <a href="#0" className="ph2 ph0-ns pb3 link db">
      <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
      <h3 className="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
    </a>
  </article>
</section>
<b className="db f2 mb1 pa4">
  Completed Courses
</b>

<b className="db f3 mb1">
  Full-Stack
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">The Complete Web Developer in 2018: Zero to Mastery</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Web Development Foundations: Full-Stack vs Front-End</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Become a Web Developer Learning Path</a></li>
</ul>
<b className="db f3 mb1">
  Front-End
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">HTML Essential Training - Lynda.com</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">HTML Fundamentals Course</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Introduction to CSS</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">CSS Essential Training 1</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">CSS Essential Training 2</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Programming Foundations: Fundamentals</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">jQuery Tutorial Course</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">JavaScript Tutorial Course</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">JavaScript Essential Training</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Learning React.js</a></li>
</ul>
<b className="db f3 mb1">
  Back-End
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Programming Foundations: Databases</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">SQL Fundamentals Course</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">PHP Tutorial Course</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Learning Node.js</a></li>
</ul>
<b className="db f3 mb1">
  Salesforce
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Learning Salesforce</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Salesforce Trailhead [ App Customization Specialist SuperBadge + 13 Badges ]</a></li>
</ul>
<b className="db f3 mb1">
  Other
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Git Essential Training</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Workflow Tools for Web Developers</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Game Design Foundations: 1 Ideas, Core Loops, and Goals</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">C# Tutorial course</a></li>
</ul>
<b className="db f2 mb1 pa3">
  Software
</b>
<ul className="list ph3 ph5-ns pv4">
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Photoshop</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Illustrator</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">InDesign</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Blender</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Unity</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Zapier</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">WordPress</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Social Media Expert</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Facebook Ads</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Word</a></li>
  <li className="dib mr1 mb2"><a href="#" className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">Excel</a></li>
</ul>
      </div>
    );
  }
}

export default App;
