import React, { useContext, useEffect, useState } from 'react';
import env from '@beam-australia/react-env';
import { posts as postsHttp } from 'libs/http/posts/posts';
import { history } from 'libs/history';

import { UserContext } from 'contexts/UserContext';
import { Posts } from 'libs/http/posts/posts.types';
import { Tweet } from 'libs/http/posts/tweets.types';

import { Layout } from 'ui/organisms/Layout/Layout';
import { Loader } from 'ui/atoms/Loader/Loader';
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail';
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail';
import TwitterAvatar from 'pages/About/resources/1.jpg';

import './BlogPage.scss';
import { Button } from 'ui/atoms/Button/Button';

export const BlogPage = (): React.ReactElement => {
  const [posts, setPosts] = useState<Posts[]>();
  const [tweets, setTweets] = useState<{ data: Tweet[] }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTweets, setIsLoadingTweets] = useState(true);
  const { isUserLogged } = useContext(UserContext);
  const [errors, setErrors] = useState({
    statusCode: 0,
    message: '',
  });

  const goToAddPage = (): void => {
    history.push('blog/add');
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await postsHttp.getPosts();

        setIsLoading(false);
        setPosts(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setErrors(error.response.data);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getTweets = async () => {
      const { data } = await postsHttp.getTweets('228456219');

      setIsLoadingTweets(false);
      setTweets(data);
    };

    getTweets();
  }, []);

  return (
    <Layout>
      <div className="blog">
        {errors && errors.message ? (
          <>
            <p>Status code = {errors.statusCode}</p>
            <p>Message = {errors.message}</p>
          </>
        ) : (
          <>
            {isLoading || isLoadingTweets ? (
              <Loader />
            ) : (
              <>
                <div className="blog__posts">
                  {isUserLogged && (
                    <div className="blog__posts__add-btn">
                      <Button text="Add Post" onClick={goToAddPage} />
                    </div>
                  )}
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
                  <div className="blog__twitter-posts__title">
                    Recent Tweets
                  </div>
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
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};
