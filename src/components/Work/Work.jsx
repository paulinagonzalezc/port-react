import React, { useState } from 'react';
import { projectsData, projectsNav } from './Data';

const Work = () => {
  const [current, setCurrent] = useState('All');
  const shown = projectsData.filter(
    (p) => current === 'All' || p.category === current,
  );

  return (
    <section className="s" id="work" style={{ paddingTop: 0 }}>
      <div className="w">
        <div className="sh">
          <h2>Projects</h2>
          <p className="sub">Machine learning experiments and apps I’ve shipped.</p>
        </div>
        <div className="filters">
          {projectsNav.map((name) => (
            <button
              key={name}
              aria-pressed={name === current}
              onClick={() => setCurrent(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="grid">
          {shown.map((p) => (
            <article className="card" key={p.id}>
              <div className="im">
                <img loading="lazy" alt={`Screenshot of ${p.title}`} src={p.image} />
              </div>
              <div className="bd">
                <p className="c">{p.category}</p>
                <h3>{p.title}</h3>
                <p className="dd">{p.description}</p>
                <div className="lk">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      Live demo
                    </a>
                  )}
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
