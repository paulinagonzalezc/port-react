import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://wellfound.com/u/paulina-gonzalez-cantu"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-letter-english-a"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/paulina-gonzalez-cantu/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/paulinagonzalezc"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
