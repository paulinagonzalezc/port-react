import React, { useState } from 'react';

const experience = [
  {
    when: 'May 2024 to present',
    title: 'Software Developer',
    org: 'HashConsole',
    current: true,
    bullets: [
      'Build a full-stack cloud development platform with Next.js, Flask and PostgreSQL, enabling real-time code execution and collaborative workflows.',
      'Design scalable backend APIs, authentication systems and role-based access control.',
      'Develop analytics and onboarding flows that improve engagement and retention.',
      'Architect database schemas and workflows for multi-user environments.',
    ],
  },
  {
    when: 'Aug 2020 to Sep 2022',
    title: 'Analytics Specialist',
    org: 'CEMEX',
    bullets: [
      'Led development of Power BI and SQL dashboards so stakeholders could decide with data.',
      'Managed international and local projects, improving IT services and efficiency with PostgreSQL and Power BI.',
      'Built and integrated React.js web applications that improved user experience and performance.',
      'Worked with cross-functional teams to deliver scalable IT solutions.',
    ],
  },
  {
    when: 'Dec 2019 to May 2020',
    title: 'Industrial Engineering Intern',
    org: 'Ternium',
    bullets: [
      'Engineered a ProModel logistics simulator to guide high-cost decisions in a steel roll production warehouse.',
      'Improved internal stakeholder portals with database management and front-end work.',
      'Validated and tested the simulator so production planning could trust its results.',
    ],
  },
  {
    when: 'Jul 2019 to Dec 2019',
    title: 'Data Analyst Intern',
    org: 'Sigma Alimentos',
    bullets: [
      'Analyzed historical demand in Excel to forecast requirements and optimize inventory.',
      'Created Power BI and Tableau reports and dashboards for demand planning.',
    ],
  },
];

const education = [
  {
    when: 'In progress',
    title: 'M.S. Computer Science',
    org: 'University of Texas at Austin',
    meta: 'Android programming, implementation of programming languages, algorithms, virtualization, parallel systems.',
  },
  {
    when: '2023 to 2025',
    title: 'M.Eng. Applied Data Science',
    org: 'University of Victoria',
    meta: 'Algorithms and data structures, machine learning, pattern recognition, computer vision, data mining, security and privacy.',
  },
  {
    when: '2015 to 2020',
    title: 'B.S. Industrial and Systems Engineering',
    org: 'UDEM',
    meta: 'Linear algebra, probability and statistics, numerical methods, operations research, simulation, linear programming.',
  },
];

const Timeline = ({ items, id, labelledBy }) => (
  <div className="tl" id={id} role="tabpanel" aria-labelledby={labelledBy}>
    {items.map((it) => (
      <div className="it" key={it.title + it.org}>
        <div className="d">{it.when}</div>
        <div className="r" />
        <div>
          <h3>
            {it.title}
            {it.current && <span className="now">Current</span>}
          </h3>
          <p className="co">{it.org}</p>
          {it.bullets ? (
            <ul>
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : (
            <p className="meta">{it.meta}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

const Qualification = () => {
  const [tab, setTab] = useState('experience');
  return (
    <section className="s" id="journey" style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="sh">
          <h2>My journey</h2>
          <p className="sub">Where I’ve worked and studied.</p>
        </div>
        <div className="tabs" role="tablist">
          <button
            role="tab"
            id="tb1"
            aria-selected={tab === 'experience'}
            aria-controls="p1"
            onClick={() => setTab('experience')}
          >
            Experience
          </button>
          <button
            role="tab"
            id="tb2"
            aria-selected={tab === 'education'}
            aria-controls="p2"
            onClick={() => setTab('education')}
          >
            Education
          </button>
        </div>
        {tab === 'experience' ? (
          <Timeline items={experience} id="p1" labelledBy="tb1" />
        ) : (
          <Timeline items={education} id="p2" labelledBy="tb2" />
        )}
      </div>
    </section>
  );
};

export default Qualification;
