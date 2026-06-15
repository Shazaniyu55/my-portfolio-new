import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/Capture11.PNG";
import suicide from "../../Assets/Projects/quickmed.png";

import royale from "../../Assets/Projects/royale.PNG";
import charity from "../../Assets/Projects/lago.jpeg";
import dataease from "../../Assets/Projects/logo.png";
import gennet from "../../Assets/Projects/gennet.png";
import wet from "../../Assets/Projects/wetanddry.PNG";
import geo from "../../Assets/Projects/new.PNG"
import rent from "../../Assets/Projects/rental.png"
import legal from "../../Assets/Projects/legal.png"
import pro from "../../Assets/Projects/pro2.PNG"
import pro1 from "../../Assets/Projects/pro3.PNG"
import pro2 from "../../Assets/Projects/pro4.PNG"
import port from "../../Assets/Projects/port.png"


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
              title="MLM_SOFTWARE"
              description="Multi level affiliate marketing web app with referall system and payment integration.built on Reactjs and NodeJs backend"
              ghLink=""
              demoLink="https://mlm-software-beta.vercel.app/"
            />
          </Col>

         

         

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Quickmed"
              description="Quickmed webapp for the quickmed mobile app and quickmed blog built on HTML5 and CSS"
              ghLink=""
              demoLink="https://www.quickmedng.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={royale}
              isBlog={false}
              title="Royalecleaners website"
              description="The Royalecleaners official product webapp webapp fOR dry cleaning and laundry services in London built on React and NodeJs backend"
              ghLink=""
              demoLink="https://www.royalecleaners.co.uk/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


         


          




         

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charity}
              isBlog={false}
              title="Hearts United"
              description="This is a charity android app that helps people to donate to the less privileged built on Flutter and Firebase backend"
              ghLink=""
              demoLink="https://apkpure.com/p/com.example.charity_app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataease}
              isBlog={false}
              title="DataEase"
              description="This is your all in one utility webApp and mobile app built on Flutter and NodeJs backend, the features are purchase airtime, data, electricity, gift cards and more"
              ghLink="https://www.nexadataease.com/"
              demoLink="https://play.google.com/store/apps/details?id=com.nexatech.dataease"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gennet}
              isBlog={false}
              title="Gennet Tech Solution Ltd"
              description="This is a landing page for a solar installion company"
              ghLink=""
              demoLink="https://gennet-tech-ashen.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wet}
              isBlog={false}
              title="Wet and Dry"
              description="Construction company landing page built on HTML5 , Bootstrap and NodeJs backend"
              ghLink=""
              demoLink="https://wet-dry.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geo}
              isBlog={false}
              title="GeoCrane App"
              description="GeoCrane is an emergency response app design to solve the problem of emeegency response in Nigeria in time of accident danger and civil unrest."
              ghLink="https://github.com/Shazaniyu55"
              demoLink="https://github.com/Shazaniyu55"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rent}
              isBlog={false}
              title="Rent Space App"
              description="A rental management app for handling property sales and bookings."
              ghLink="https://github.com/Shazaniyu55"
              demoLink="https://github.com/Shazaniyu55"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legal}
              isBlog={false}
              title="Legal NG"
              description="A legal services app that connects users with legal professionals for consultations and services. you can also buy legal documents and templates on the app."
              ghLink="https://github.com/Shazaniyu55"
              demoLink="https://github.com/Shazaniyu55"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro}
              isBlog={false}
              title="Elite Resources Trading Limited"
              description="Global Exporters of Premium Nigerian Agro Commodities built on Next.js and Tailwind CSS"
              ghLink=""
              demoLink="https://www.eliteresourcestrade.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="DataEase Landing Page "
              description="Landing page for DataEase built on Next.js and Tailwind CSS"
              ghLink=""
              demoLink="https://nexadataease.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="DataEase Mobile App Landing Page "
              description="Landing page for DataEase built on Next.js and Tailwind CSS"
              ghLink=""
              demoLink="https://dataease-ai-customer.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="The Warrake Muslims Education and Empowerment Foundation"
              description="The Warrake Muslims Education and Empowerment Foundation (WMEEF) is a community-based nonprofit working to renew Quranic learning and Islamic values, and to open doors to education and self-reliance for the people of Warrake."
              ghLink=""
              demoLink="https://wmeef.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
