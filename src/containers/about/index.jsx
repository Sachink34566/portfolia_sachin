import React from "react";
import PageHeader from "../../components/pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.css';
import {DiApple,DiAndroid} from'react-icons/di';
import {FaDev,FaDatabase} from'react-icons/fa';
const personalDetails=[
  {
    label:"Name",
    value:"Sachin kumar",
  },
  {
    label:"Age:",
    value:"24"
  },
  {
    label:"Address:",
    value:"India"
  },
  {
    label:"Email:",
    value:"sachinkumar98504@gmail.com"
  },
  {
    label:"Contact:",
    value:"6203841331"
  }
];

const jobSummary = "Adaptable .NET Full Stack Developer with six months of experience in building high-performance applications using .NET and Angular. Skilled in backend and frontend integration, focused on delivering efficient, user-friendly solutions, and committed to learning and enhancing technical and UI development skills.";


const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
        <div className="about_content">
          <div className="about_pernalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(-900px"}}
            end={{transform:"translateY(0px"}}
            >
          <h3>.Net Full Stack Developer with Angular</h3>
          <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(1500px"}}
            end={{transform:"translateY(0px"}}
            >
          <h3 className="personInformation">Personal Information</h3>
          <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
          </Animate>
          </div>
          <div className="about_servicewrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(600px"}}
            end={{transform:"translateY(0px"}}
            >
            <div className="about_servicewrapper_inner">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)"></FaDev>
            </div>
            <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)"/>
              </div> 
            </div>
            </Animate>
          </div>
        </div>   
    </section>
  );
};
export default About;
