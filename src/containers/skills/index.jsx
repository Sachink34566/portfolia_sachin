import React from "react";
import PageHeader from "../../components/pageheader";
import { AiOutlineCode} from "react-icons/ai";
import { skillsData } from "../skills/utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeader headerText="My Skills" icon={<AiOutlineCode size={40} />} />
            <div className="skills_content_wrapper">
                {skillsData.map((item, i) => (
                    <div key={i} className="skills_content_wrapper_list">
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: 'translateX(-200px)'
                            }}
                            end={{
                                transform: 'translateX(0px)'
                            }}
                        >
                            <h3 className="skills_content_wrapper_category">{item.label}</h3>
                        
                        <div>
                            {item.data.map((skillsItem, j) => (
                                <AnimateKeyframes
                                    key={j}
                                    play
                                    duration={1}
                                    keyframes={["opacity: 1", "opacity: 0"]}
                                    iterationCount={1}
                                >
                                    <div className="progressbar-wrapper">
                                        <p>{skillsItem.skillNAme}</p>
                                        <Line
                                            percent={skillsItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="var(--yellow-theme-main-color)"
                                            trailWidth="2"
                                            strokeLinecap="square"
                                        />
                                    </div>
                                </AnimateKeyframes>
                            ))}
                        </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
