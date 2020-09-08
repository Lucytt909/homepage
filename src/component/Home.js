import React from 'react';
import TopBar from './TopBar';
import {Row, Col, Card} from "antd";
import './Home.css';
import Summary from "./Summary";
import Skills from "./Skills";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function Home() {
  return (
    <div>
      <TopBar/>
      <div className="home-cards-container">
        <Row>
          <Col xs={24}>
            <Card title="Summary" bordered={false} className="card-container">
              <Summary/>
            </Card>
          </Col>
          <Col xs={24}>
            <Card title="Skills" bordered={false} className="card-container">
              <Skills/>
            </Card>
          </Col>
          <Col xs={24}>
            <Card title="Education" bordered={false} className="card-container">
              <Education/>
            </Card>
          </Col>
          <Col xs={24}>
            <Card title="Work Experience" bordered={false} className="card-container">
              <WorkExperience/>
            </Card>
          </Col>
        </Row>
      </div>
    </div>

  );
}

export default Home;
