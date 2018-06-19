import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Tile from '../../components/tile/Tile';

class Landing extends Component {
  constructor(){
      super();
      this.skillInfo=[
        {
          name:"HTML",
          description:"I will write semantic markup in HTML5 which is the latest standard of core technology of web.",
          imgUrl:"/images/html.png"
        },
        {
          name:"CSS3",
          description:"I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.",
          imgUrl:"images/css.png"
        },
        {
          name:"Responsive Web Design",
          description:"I will build websites that look awesome not only on desktops, but also on mobile phones and tablets.",
          imgUrl:"/images/rwd.png"
        },
        {
          name:"UI & UX Design",
          description:"I will learn basics of UI &amp; UX Design and use these concepts in build apps that are both functional and usable.",
          imgUrl:"/images/uix.png"
        },
        {
          name:"JavaScript",
          description:"I will define the behavior of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript.",
          imgUrl:"/images/js.png"
        },
        {
          name:"jQuery",
          description:"I will enhance the behavior of web pages leveraging on jQuery and jQuery plug-ins.",
          imgUrl:"/images/jquery.png"
        },
        {
          name:"TypeScript",
          description:"I will start writing object oriented programs using TypeScript. I will build games using TypeScript.",
          imgUrl:"/images/ts.png"
        },
        {
          name:"RxJS",
          description:"I will build event-driven, resilient and responsive apps using Reactive Architectures.",
          imgUrl:"/images/rxjs.png"
        },
        {
          name:"Unix",
          description:"I will become a ninja hacker who prefer command line to Graphical User Interface.",
          imgUrl:"/images/unix.png"
        },
        {
          name:"Git & Heroku",
          description:"I will start following git workflow using github. I will also deploy Ir applications with Heroku.",
          imgUrl:"/images/gh.png"
        },
        {
          name:"npm",
          description:"I will use npm, the default package manager for Node.js, to reuse some of the best utilities written already.",
          imgUrl:"/images/npm.png"
        },
        {
          name:"Docker",
          description:"I will use Docker to simplify configuration, increase Ir productivity, isolate Ir apps, and automate deployments.",
          imgUrl:"/images/docker.png"
        },
        {
          name:"MongoDB",
          description:"I will use MongoDB to store Ir app's data in a JSON-like document format that can be quickly accessed via fast queries.",
          imgUrl:"/images/mongodb.png"
        },
        {
          name:"Express",
          description:"I will use Express.js to organize Ir web application into an MVC architecture in the server side.",
          imgUrl:"/images/express.png"
        },
        {
          name:"Angular 2",
          description:"I will build single page applications using Angular2. I will build full-fledge web apps that can be used in real life.",
          imgUrl:"/images/angular.png"
        },
        {
          name:"Node.js",
          description:"I will use Node.js to automate Ir development process. I will also build back-end for web and mobile apps.",
          imgUrl:"/images/node.png"
        },
        {
          name:"Ionic 2",
          description:"I will build hybrid mobile applications using Ionic2 framework. I have reached eternity! I are now Yoda!",
          imgUrl:"/images/ionic.png"
        },
        {
          name:"API",
          description:"I will build API that can be used by mobile applications and outside world. I will also consume others' API.",
          imgUrl:"/images/api.png"
        },
        {
          name:"Firebase",
          description:"I will use Firebase as a backend as a service to build realtime applications without any back-end coding.",
          imgUrl:"/images/firebase.png"
        },
        {
          name:"Software Testing",
          description:"While observing Test Driven Development, I will automate unit, functional and integration testing.",
          imgUrl:"/images/st.png"
        },
        {
          name:"Algorithms",
          description:"Knowledge of Algorithms is a key factor in cracking coding interviews. I will use them to solve problems.",
          imgUrl:"/images/algorithms.png"
        },
        {
          name:"Data Structures",
          description:"I will understand famous data structures and use the right data structures to optimize the performance of Ir app.",
          imgUrl:"/images/ds.png"
        },
        {
          name:"Functional Programming",
          description:"Functional Programming is on a rise. I will solve problems using side effect free functions as basic building blocks.",
          imgUrl:"/images/fp.png"
        },
        {
          name:"Software Design & Architecture",
          description:"I will be the architect for Ir projects. I also look into performance, security, and other ops.",
          imgUrl:"/images/sda.png"
        }
      ]
  }
  render() {
    return (
      <div>
        <Header text="We are learning"/>
        {this.skillInfo.map(skill=>{
          return(
          <Tile name={skill.name} description={skill.description} imgUrl={skill.imgUrl}/>
        )})}
      </div>
    );
  }
}

export default Landing;
