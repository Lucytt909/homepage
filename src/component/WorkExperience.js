import React from 'react';
import './WorkExperience.css';
import {Tag} from "antd";

function WorkExperience() {
  return (
    <div>
      <div className="left-align work-experience-content">
        <p className="bold">Software Engineer Intern, Walmart ECommerce (Sunnyvale, CA)</p>
        <p>
          Worked in Sam’s Club Site Experience and Tools Team as a back-end software engineer;
          created a monitoring & testing tool in Node.js with web tech React and Express.
        </p>
        <p className="work-experience-bullet">- Continuous Synthetic Monitoring of Samsclub.com website with Node
          libraries Google Lighthouse and Puppeteer;</p>
        <p className="work-experience-bullet">- Dashboard to monitor the metrics over time with Prometheus and
          visualized in Grafana;</p>
        <p className="work-experience-bullet">- Use Docker to containerize the code for deployment on Azure;</p>
        <p className="work-experience-bullet">- User Interface by React to manage and trigger tests.</p>

        <p className="bold">Tools Used:</p>
        <div className="tag-row">
          <Tag color="red">JavaScript</Tag>
          <Tag color="volcano">Express</Tag>
          <Tag color="gold">React</Tag>
          <Tag color="green">Docker</Tag>
          <Tag color="cyan">Prometheus</Tag>
          <Tag color="blue">Grafana</Tag>
          <Tag color="geekblue">Google Lighthouse</Tag>
          <Tag color="purple">Puppeteer</Tag>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
