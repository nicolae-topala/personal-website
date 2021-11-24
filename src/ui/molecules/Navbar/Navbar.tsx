import React from 'react';

import { history } from 'libs/history';
import { useMenu } from 'hooks/useMenu';

import './Navbar.scss';

export const Navbar = (): React.ReactElement => {
  const menu = useMenu();

  const goToPage = (route: string): void => {
    history.push(route);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__title">Me</div>
        <div className="navbar__socials">Social links</div>
      </div>

      <div className="menu">
        {menu.map((item) => (
          <span
            className={`menu__item${item.active ? '--active' : ''}`}
            key={item.route}
            onClick={() => goToPage(item.route)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
};
