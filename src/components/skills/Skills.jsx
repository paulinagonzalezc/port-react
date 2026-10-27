import React from 'react';

const groups = [
  ['Programming', ['Python', 'JavaScript', 'Kotlin', 'SQL']],
  ['Frameworks and tools', ['React.js', 'Next.js', 'Flask', 'Django', 'Node.js', 'Android Jetpack']],
  ['Data and ML', ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Power BI', 'Tableau']],
  ['Cloud and AI', ['AWS', 'PostgreSQL', 'REST APIs', 'OpenAI', 'LLMs', 'Claude']],
  ['Concepts', ['Machine learning', 'Computer vision', 'Data mining', 'Data analysis', 'Algorithms', 'Data structures']],
];

const Skills = () => (
  <section className="s" id="skills" style={{ paddingTop: 0 }}>
    <div className="w">
      <div className="sh">
        <h2>Skills</h2>
      </div>
      <div className="sk">
        {groups.map(([title, items]) => (
          <div key={title}>
            <h3>{title}</h3>
            <div className="chips">
              {items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
