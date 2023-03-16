import React from 'react'
import './Timeline.css'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <section id='Timeline'>
    <h5>My Timeline</h5>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2c2c6c", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5CDB95" }}
        date="2021 - present"
        iconStyle={{ background: "#1f1f38", color: "#fff" }}
        icon={<i className="fas fa-code"></i>}
      >
        <h3 className="vertical-timeline-element-title">Bachelor's Degree in Information Science and Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">JSS Science and Technology University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2c2c6c", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5CDB95" }}
        date="2018 - 2020"
        iconStyle={{ background: "#1f1f38", color: "#fff" }}
        icon={<i className="fas fa-code"></i>}
      >
        <h3 className="vertical-timeline-element-title">Sri Chaitanya Techno School</h3>
        <h4 className="vertical-timeline-element-subtitle">12th Secondary Examination</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2c2c6c", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #5CDB95" }}
        date="2015 - 2018"
        iconStyle={{ background: "#1f1f38", color: "#fff" }}
        icon={<i className="fas fa-graduation-cap"></i>}
      >
        <h3 className="vertical-timeline-element-title">Ryan International School</h3>
        <h4 className="vertical-timeline-element-subtitle">10th Secondary Examination</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </section>
  );
};

export default Timeline
