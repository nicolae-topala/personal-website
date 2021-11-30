import React from 'react';
import env from '@beam-australia/react-env';
import { posts } from 'libs/http/posts/posts';

import { Layout } from 'ui/organisms/Layout/Layout';
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail';
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail';
import TwitterAvatar from 'pages/About/resources/1.jpg';

import './BlogPage.scss';

export const BlogPage = (): React.ReactElement => {
  const getData = async () => {
    const data = await posts.getPosts();
    console.log(data);
  };

  getData();

  return (
    <Layout>
      <div className="blog">
        <div className="blog__posts">
          <BigThumbnail data={{ id: 1, coverUrl: '', title: 'First Post' }} />
          <div className="blog__posts__posts-grid">
            <SmallThumbnail
              data={{ id: 2, coverUrl: '', title: 'Second Post' }}
            />
            <SmallThumbnail
              data={{ id: 3, coverUrl: '', title: 'Third Post' }}
            />
            <SmallThumbnail
              data={{ id: 4, coverUrl: '', title: 'Fourth Post' }}
            />
          </div>
        </div>
        <div className="blog__twitter-posts">
          <div className="blog__twitter-posts__title">Recent Tweets</div>
          <div className="blog__twitter-posts__tweets">
            <div className="post">
              <a
                href={env('TWITTER_URL')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header">
                  <img
                    src={TwitterAvatar}
                    className="header__avatar"
                    alt="My avatar"
                  />
                  <div className="header__name">Nick</div>
                </div>
              </a>
              <a
                href={env('TWITTER_URL')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="post-text">This is a simple post</div>
              </a>
            </div>

            <div className="post">
              <a
                href={env('TWITTER_URL')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header">
                  <img
                    src={TwitterAvatar}
                    className="header__avatar"
                    alt="My avatar"
                  />
                  <div className="header__name">Nick</div>
                </div>
              </a>
              <a
                href={env('TWITTER_URL')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="post-text">This is a simple post</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
