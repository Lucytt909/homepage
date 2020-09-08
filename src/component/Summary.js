import React from 'react';
import './Summary.css';
import {Col, Row} from "antd";

function Summary() {
  return (
    <div>
      <Row>
        <Col xs={24} md={8}>
          <img src="image/profile.png" alt="profile" className="profile-avatar"/>
        </Col>
        <Col xs={24} md={16}>
          <div className="left-align summary-text">
            <p className="gradient-text">Sitian (Lucy) Shen</p>
            <p>
              As a graduate student majoring in Electrical and Computer Engineering at Carnegie Mellon University
              with <b>solid programming & analytical background</b>, I’m currently looking for full-time Software
              Engineer
              opportunity.
            </p>
            <p>Skilled and passionate about: <b>Web Development technology, Data Structure & Algorithms, and Java
              (especially OOP)</b> etc. Available start date: Dec, 2020.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Summary;
