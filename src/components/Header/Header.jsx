import React from 'react';

const links = [
  ['about', 'About', true],
  ['journey', 'Journey', false],
  ['work', 'Projects', false],
  ['skills', 'Skills', true],
  ['contact', 'Contact', false],
];

const Header = () => (
  <header className="top">
    <div className="w">
      <a className="logo" href="#top">
        Paulina González Cantú
      </a>
      <nav aria-label="Main">
        {links.map(([id, label, hideOnMobile]) => (
          <a key={id} href={`#${id}`} className={hideOnMobile ? 'h' : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
