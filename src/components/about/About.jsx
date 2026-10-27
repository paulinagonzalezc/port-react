import React from 'react';

const focus = [
  ['Full-stack development', 'Next.js, React, Flask, Django, Node.js, PostgreSQL'],
  ['Data science and ML', 'TensorFlow, PyTorch, Scikit-learn, computer vision'],
  ['Analytics and dashboards', 'Power BI, Tableau, SQL, forecasting'],
];

const About = () => (
  <section className="s" id="about">
    <div className="w">
      <div className="sh">
        <h2>Engineer by training, builder by habit.</h2>
      </div>
      <div className="about">
        <div>
          <p>
            I’m a software developer and industrial engineer specialized in data
            science, machine learning and AI. I build scalable full-stack and
            data-driven systems, and I’ve delivered production software in both
            enterprise and startup environments.
          </p>
          <p>
            My industrial engineering background shaped how I work: model the
            problem first, then build the system that solves it. I’m currently
            pursuing a Master of Science in Computer Science at the University
            of Texas at Austin, after completing a Master of Engineering in
            Applied Data Science at the University of Victoria.
          </p>
          <p>
            Have a product, feature or model that needs building? Look through
            my work, then get in touch.
          </p>
        </div>
        <div className="focus">
          {focus.map(([title, text]) => (
            <div key={title}>
              <b>{title}</b>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
