import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/job.png";
import rentals from "../../Assets/Projects/rentals.PNG";
import chatify from "../../Assets/Projects/qmap.png";
import suicide from "../../Assets/Projects/quickmed.png";
import bitsOfCode from "../../Assets/Projects/shop.png";
import swagger from "../../Assets/Projects/swagger.png";
import adain from "../../Assets/Projects/adain.png";
import salt from "../../Assets/Projects/salt.png";
import game from "../../Assets/Projects/game.png";
import royale from "../../Assets/Projects/royale.PNG";
import charity from "../../Assets/Projects/lago.jpeg";

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
              demoLink="https://latoyaandstyles-git-main-shazaniyus-projects.vercel.app/"
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
              imgPath={royale}
              isBlog={false}
              title="Royalecleaners website"
              description="The Royalecleaners official product webapp webapp fOR dry cleaning and laundry services in London"
              ghLink=""
              demoLink="https://www.royalecleaners.co.uk/"
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


                    <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentals}
              isBlog={false}
              title="Rentals website"
              description="The Rentals official product webapp webapp"
              ghLink=""
              demoLink="https://rentalsmvp.vercel.app/api/v2/get/home"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salt}
              isBlog={false}
              title="Mind The Salt website"
              description="Mind the salt is a health informative webapp where it give you information about salt and its effect on the body, features like salt tracker, login register, and blogs "
              ghLink=""
              demoLink="https://mind-the-salt-web.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Mind The Salt Trivia Game"
              description="This is a fun interactive quizz game that teaches about salt consumption and its content"
              ghLink=""
              demoLink="https://mind-the-salt-trivia.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charity}
              isBlog={false}
              title="Hearts United"
              description="This is a charity android that helps people to donate to the less privileged"
              ghLink="https://github.com/Shazaniyu55/sync.git"
              demoLink="https://github.com/Shazaniyu55/sync.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
