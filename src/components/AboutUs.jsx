import React from 'react'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar';
import '../Styles/About.css';
const AboutUs = () => {
    return (
      <>
        <div className="abt-container">
          <iframe
            width="1110"
            height="624"
            src="https://www.youtube.com/embed/2DCso1hbO8A"
            title="About Scketch Digital Solutions"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h1>AboutUs</h1>
          <p>
            Scketch is a Design Prodigy that fulfils your digital needs right
            from idea incubation to launch, from its design to development, from
            iterating to marketing. We are equipped with an arsenal of design
            principles and are trained in understanding business needs from an
            end user perspective to craft the best experience possible.
          </p>
          <h1>Philosophy</h1>
          <p>
            At Scketch, a truly satisfied client is ‘the target’ and we employ
            all our creative and technological assets to attain it. We follow a
            customized client-centric approach to eloquently interface between
            your business needs and our scientific design principles. We
            strategize appropriate designs based on data driven insights and
            focus on selling your story and creating a brand. We listen to your
            story like no one and present your story like never before. We are
            simple and effective, lean and consistent. We value your time just
            as we value ours and strive passionately to put a smile on your
            face!
          </p>
          <h1>Mission</h1>
          <p>
            The closely bonded team of Scketch aspires to provide skilfully the
            complete digital solution to our clients and strive to deliver
            wonderful experience. We continuously endeavour to innovate by
            breaking all the shackles of imagination and technology to generate
            an astounding pool of solutions as per your business requirement. We
            attempt to innovate by collaborating the strengths of conventional
            means and pristine contemporary thoughts. We do all we can to
            connect you with your dear customers using design, technology and
            psychology.
          </p>
        </div>
        <Sidebar />
        <Footer />
      </>
    );
}

export default AboutUs
