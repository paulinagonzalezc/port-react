import React, { useRef } from 'react';
import memoji from '../../assets/memoji.png';

const tags = ['Python', 'Next.js', 'PyTorch', 'PostgreSQL'];

const stats = [
  ['HashConsole', 'Building a cloud dev platform today'],
  ['2', 'Master’s degrees, one in progress'],
  ['4', 'Companies: startup to enterprise'],
  ['13', 'Featured projects below'],
];

const Home = () => {
  const stage = useRef(null);
  const me = useRef(null);
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (reduce) return;
    const r = stage.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    me.current.style.transform = `translate(${x * 14}px,${y * 10}px) rotate(${x * 6}deg)`;
  };
  const onLeave = () => {
    me.current.style.transform = '';
  };

  return (
    <>
      <section className="hero">
        <div className="w">
          <div>
            <h1>Data scientist and software engineer.</h1>
            <p className="lede">
              I build full-stack platforms, and the machine learning that makes
              them smarter.
            </p>
            <div className="btns">
              <a className="btn p" href="#work">See my projects</a>
              <a className="btn o" href="#contact">Say hello</a>
            </div>
          </div>
          <div className="stage" ref={stage} onPointerMove={onMove} onPointerLeave={onLeave}>
            <div className="disc" />
            <img id="me" ref={me} alt="Illustrated portrait of Paulina" src={memoji} />
            {tags.map((t, i) => (
              <span key={t} className={`tag t${i + 1}`}>{t}</span>
            ))}
          </div>
        </div>
      </section>
      <div className="stats">
        <div className="w">
          {stats.map(([big, small]) => (
            <div key={small}>
              <b>{big}</b>
              <span>{small}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
