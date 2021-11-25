import React from 'react';

import { history } from 'libs/history';
import { useMenu } from 'hooks/useMenu';

import './Navbar.scss';
import { Icon } from 'resources/icons/icons';
import env from '@beam-australia/react-env';

export const Navbar = (): React.ReactElement => {
  const menu = useMenu();

  const goToPage = (route: string): void => {
    history.push(route);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__title">Me</div>
        <div className="navbar__socials">
          <a
            href={env('LINKEDIN_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="linkedin" />
          </a>
          <a href={env('GITHUB_URL')} target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
          <a
            href={env('INSTAGRAM_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="instagram" />
          </a>
          <a
            href={env('FACEBOOK_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="facebook" />
          </a>
          <a
            href={env('TWITTER_URL')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="twitter" />
          </a>
        </div>
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
