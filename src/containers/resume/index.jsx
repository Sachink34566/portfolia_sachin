import React from "react";
import PageHeader from "../../components/pageheader";
import { AiOutlineLaptop  } from "react-icons/ai";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {data} from "../resume/utills"
import './styles.css';
import {MdWork} from 'react-icons/md'
const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeader headerText="Resume" icon={<AiOutlineLaptop  size={40} />} />
        <div className="timeline">
          <div className="timeline_experience">
            <h3 className="timeline_experience_header">Experience</h3>
            <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
            >
              {
                data.experience.map((item,i)=>(
                  <VerticalTimelineElement
                  key={i}
                  className="timeline_experience_header_element"
                  contentStyle={{
                    background:'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border:'1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.date}
                  icon={<MdWork/>}
                  iconStyle={{
                    background:'#181818',
                    color:'var(--yellow-theme-main-color)'
                  }}>
                    <div className="verticle-timeline_element-title-wrapper">
                      <h3>
                        {item.title}
                      </h3>
                      <h4>
                        {item.subTitle}
                      </h4>
                     
                    </div>
                    <p>{item.description}</p>
                    </VerticalTimelineElement>
                ))
              }

            </VerticalTimeline>
          </div>
          <div className="timeline_education">
            <h3 className="timeline_education_header">Education</h3>
            <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
            >
              {
                data.education.map((item,i)=>(
                  <VerticalTimelineElement
                  key={i}
                  className="timeline_education_header_element"
                  contentStyle={{
                    background:'none',
                    color: 'var(--yellow-theme-sub-text-color)',
                    border:'1.5px solid var(--yellow-theme-main-color)'
                  }}
                  date={item.date}
                  icon={<MdWork/>}
                  iconStyle={{
                    background:'#181818',
                    color:'var(--yellow-theme-main-color)'
                  }}>
                    <div className="verticle-timeline_element-title-wrapper">
                      <h3>
                        {item.title}
                      </h3>
                      <h4>
                        {item.subTitle}
                      </h4>
                    </div>
                    <p>{item.description}</p>
                    </VerticalTimelineElement>
                ))
              }

            </VerticalTimeline>
          </div>

        </div>
      </section>
    )
}
export default Resume;