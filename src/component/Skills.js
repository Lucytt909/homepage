import React from "react";
import {Row, Col, Card, Tag} from "antd";
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import {languageData, webTechData, otherSkillData} from "./SkillData";
import "./Skills.css";

function Skills() {
  return (
    <Row>
      <Col xs={24} lg={12}>
        <Card title="Programming Languages" className="inner-card-container skill-card" size="small">
          <div className="tag-row">
            <Tag color="#f50">Java</Tag>
            <Tag color="#2db7f5">Python</Tag>
            <Tag color="#87d068">JavaScript</Tag>
            <Tag color="#108ee9">C</Tag>
            <Tag color="#722ed1">Matlab</Tag>
          </div>
          <div className="skill-chart-wrapper">
            <div className="centered radar-chart-inner-container">
              <RadarChart cx={140} cy={120} outerRadius={90} width={280} height={240} data={languageData}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="language" domain={[0, 100]}/>
                <PolarRadiusAxis/>
                <Radar name="Languages" dataKey="value"
                       stroke="#2775b6" fill="#2775b6"
                       fillOpacity={0.6}/>
              </RadarChart>
            </div>
          </div>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Web Technology" className="inner-card-container skill-card" size="small">
          <div className="tag-row">
            <Tag color="#f50">Django</Tag>
            <Tag color="#2db7f5">Express.js</Tag>
            <Tag color="#87d068">React</Tag>
            <Tag color="#108ee9">Html5</Tag>
            <Tag color="#722ed1">CSS3</Tag>
          </div>
          <div className="skill-chart-wrapper">
            <div className="centered radar-chart-inner-container">
              <RadarChart cx={140} cy={120} outerRadius={90} width={280} height={240} data={webTechData}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="language" domain={[0, 100]}/>
                <PolarRadiusAxis/>
                <Radar name="Languages" dataKey="value"
                       stroke="#82ca9d" fill="#82ca9d"
                       fillOpacity={0.6}/>
              </RadarChart>
            </div>
          </div>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Computer Science Fundamental" className="inner-card-container skill-card" size="small">
          <div className="tag-row">
            <Tag color="#f50">OOP</Tag>
            <Tag color="#2db7f5">Data Structure</Tag>
            <Tag color="#87d068">Algorithms</Tag>
          </div>
          <div className="left-align skill-text">
            <p><b>Advanced knowledge</b> with Data Structure & Algorithms</p>
            <p>Received <b>top grade</b> of CMU's course Foundations of Computer System (15513)</p>
            <p><b>Strong Skill</b> with OOP (Object Oriented Programming)</p>
            <p>Have <b>deep understanding</b> if separating client-server using RESTful</p>
          </div>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Database & Other Tools" className="inner-card-container skill-card" size="small">
          <div className="tag-row">
            <Tag color="#f50">Postgres</Tag>
            <Tag color="#87d068">Git</Tag>
            <Tag color="#108ee9">Azure</Tag>
            <Tag color="#722ed1">Docker</Tag>
            <Tag color="#faad14">Prometheus</Tag>
          </div>
          <div className="skill-chart-wrapper">
            <div className="centered bar-chart-inner-container">
              <ComposedChart layout="vertical" width={280} height={260} data={otherSkillData}
                             margin={{top: 20, right: 24, bottom: 20, left: 24}}>
                <CartesianGrid stroke='#f5f5f5'/>
                <XAxis type="number"/>
                <YAxis dataKey="name" type="category"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='skill-level' barSize={10} fill='#413ea0'/>
              </ComposedChart>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Skills;
