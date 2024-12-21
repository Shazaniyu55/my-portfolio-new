import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/job.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/atwap.png";
import chatify from "../../Assets/Projects/qmap.png";
import suicide from "../../Assets/Projects/quickmed.png";
import bitsOfCode from "../../Assets/Projects/shop.png";
import swagger from "../../Assets/Projects/swagger.png";
import hacked from "../../Assets/Projects/hacked.png";
import adain from "../../Assets/Projects/adain.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QMAP"
              description="Multi level affiliate marketing web app with referall system and payment integration."
              ghLink=""
              demoLink="https://qmap.adaintech.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Latoyaandstyles"
              description="Fashion Ecommerce webapp. where people buy clothes."
              ghLink=""
              demoLink="https://www.latoyaandstyles.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ATWAP"
              description="Online Tax Collation software for the ATWAP association."
              ghLink=""
              demoLink="https://atwap.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="JobHive"
              description="A job application webapp for real-time jobs update."
              ghLink=""
              demoLink="https://www.transperfectly.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quickmed"
              description="Quickmed webapp for the quickmed mobile app and quickmed blog"
              ghLink=""
              demoLink="https://www.quickmedng.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swagger}
              isBlog={false}
              title="Adnet "
              description="Adnet is a predictive business analytic software made with NextJs and nodejs Backend this is the backend server API documentation interface."
              ghLink=""
              demoLink="https://adnet-api.vercel.app/api-docs/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hacked}
              isBlog={false}
              title="Hacked8 Online School"
              description="The hacked8 official webapp where hacked8 student can register and get free online courses."
              ghLink=""
              demoLink="https://hacked.adaintech.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adain}
              isBlog={false}
              title="Adain website"
              description="The Adain official product webapp webapp"
              ghLink=""
              demoLink="https://www.adaintech.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
