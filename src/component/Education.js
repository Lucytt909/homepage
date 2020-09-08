import React from 'react';
import './Education.css';
import {Card, Col, Row} from "antd";

function Education() {
  return (
    <div>
      <Row>
        <Col xs={24} md={12}>
          <Card title="Undergraduate" className="inner-card-container education-card" size="small">
            <Row>
              <Col xs={24} md={16}>
                <div className="left-align">
                  <p className="bold">University of Electronic Science and Technology of China</p>
                  <p>
                    Bachelor of Engineering in Electronic Science and Technology, GPA: 3.92/4.0
                  </p>
                  <p className="bold">University of Glasgow (Joint Degree)</p>
                  <p>
                    BEng Electronics and Electrical Engineering (First Honor Degree), GPA: 20.92/22
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <img src="image/UESTC.jpg" alt="UESTC Logo" className="school-logo"/>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Graduate School" className="inner-card-container education-card" size="small">
            <Row>
              <Col xs={24} md={16}>
                <div className="left-align">
                  <p className="bold">Carnegie Mellon University</p>
                  <p>
                    Master of Science in Electrical and Computer Engineering, GPA: 3.9/4.0
                  </p>
                  <p><span className="bold">Coursework:</span> Foundations of Computer System (15513), Web Application
                    Development, Java for Application Programmers, Data Structure for Application Programmers, Computer
                    Vision, Big Data Analytics</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <img src="image/CMU.jpg" alt="CMU Logo" className="school-logo"/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
