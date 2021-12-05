import React, { useEffect, useState } from 'react';
import env from '@beam-australia/react-env';
import { posts as postsHttp } from 'libs/http/posts/posts';

import { Posts } from 'libs/http/posts/posts.types';
import { Tweet } from 'libs/http/posts/tweets.types';

import { Layout } from 'ui/organisms/Layout/Layout';
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail';
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail';
import TwitterAvatar from 'pages/About/resources/1.jpg';

import './BlogPage.scss';

export const BlogPage = (): React.ReactElement => {
  const [posts, setPosts] = useState<Posts[]>();
  const [tweets, setTweets] = useState<{ data: Tweet[] }>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await postsHttp.getPosts();

      setPosts(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const getTweets = async () => {
      const { data } = await postsHttp.getTweets('228456219');

      setTweets(data);
    };

    getTweets();
  }, []);

  return (
    <Layout>
      <div className="blog">
        <div className="blog__posts">
          {posts && posts.length !== 0 ? (
            <>
              <BigThumbnail data={posts[0]} />
              <div className="blog__posts__posts-grid">
                {posts.length > 1 &&
                  posts
                    .slice(1)
                    .map((item) => (
                      <SmallThumbnail key={item.id} data={item} />
                    ))}
              </div>
            </>
          ) : (
            <p>Currently no posts</p>
          )}
        </div>
        <div className="blog__twitter-posts">
          <div className="blog__twitter-posts__title">Recent Tweets</div>
          <div className="blog__twitter-posts__tweets">
            {tweets &&
              tweets.data.slice(0, 5).map((item) => (
                <div key={item.id} className="post">
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
                    <div className="post-text">{item.text}</div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
