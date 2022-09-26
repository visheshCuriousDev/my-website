import "./resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Vishesh M</h4>
              <p><em>Innovative and deadline-driven Web Developer with 5+ years of experience developing applications from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>Chennai, Tamil Nadu, Chennai - 600122</li>
                <li>contact@visheshdev.in</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology</h4>
              <h5>2013 - 2017</h5>
              <p><em>Prathyusha Engineering College, Thirvallur, Tamil Nadu</em></p>
              <p> Completed by Bachelor of Technology Degree with frist class affliated under Anna University.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior consultant developer</h4> 
              <p><b><a href="https://www.thoughtworks.com/en-in" target="_blank" rel="noreferrer">@Thoughtworks</a></b></p>
              <h5>2022 - Present</h5>
              <ul>
                <li>Working as fullstack dev in JavaScript, TypeScript, React, Node.js, ionic, etc.</li>
                <li>Develop and deploy to the latest cloud platforms with CI/CD such as AWS CloudFront, GIT, Jenkins.</li>
                <li>Mentoring team with 5-6 members on a new healthcare start up.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Senior programmer</h4>
              <p><b><a href="https://www.ionixxtech.com/" target="_blank" rel="noreferrer">@Ionixx</a></b></p>
              <h5>2017 - 2022</h5>
              <ul>
                <li>Worked with a variety of different languages, frameworks, and content management systems such as JavaScript, TypeScript, React, Node.js, etc.</li>
                <li>Develop and deploy to the latest cloud platforms with CI/CD such as AWS CloudFront, GIT, EC2, Firebase, etc.</li>
                <li>Communicate and collaborate with multi-disciplinary teams of engineers, designers, producers, clients, and stakeholders on a daily basis.</li>
                <li>Oversee the efficient use of production projects. Lead teams with 5-6 members on overseas projects.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
