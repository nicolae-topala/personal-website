import React, { useContext, useEffect, useState } from 'react';
import env from '@beam-australia/react-env';
import { useLocation, useParams } from 'react-router-dom';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

import { history } from 'libs/history';
import { Posts } from 'libs/http/posts/posts.types';
import { posts as postsHttp } from 'libs/http/posts/posts';

import { UserContext } from 'contexts/UserContext';
import { Layout } from 'ui/organisms/Layout/Layout';
import { Loader } from 'ui/atoms/Loader/Loader';
import { PostAction } from './atoms/PostAction/PostAction';

import './BlogPostPage.scss';

export const BlogPostPage: React.FC = (): React.ReactElement => {
  const [post, setPost] = useState<Posts>();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { isUserLogged } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await postsHttp.getPost(id);

      setIsLoading(false);
      console.log(data);
      setPost(data);
    };

    getPost();
  }, [id]);

  const onCopyLink = (): void => {
    navigator.clipboard.writeText(`${env('WEBSITE_URL')}${location.pathname}`);
  };

  const getPostDate = (): string => {
    if (post?.createdAt) {
      const d = new Date(post.createdAt);

      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

      return `${month} ${day}, ${year}`;
    }

    return '';
  };

  const goToEditPage = (id: number): void => {
    history.push(`/blog/edit/${id}`);
  };

  return (
    <Layout>
      <div className="blog-post">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {post && (
              <>
                <img
                  src={post.coverUrl}
                  className="blog-post__cover"
                  alt="Blog Cover"
                />
                <div className="blog-post__title">{post.title}</div>
                <div className="blog-post__date">{getPostDate()}</div>
                <div
                  className="blog-post__post"
                  dangerouslySetInnerHTML={{ __html: post.text }}
                />
                {isUserLogged && (
                  <div className="admin-actions">
                    <button onClick={() => goToEditPage(post.id)}>
                      Edit Post
                    </button>
                  </div>
                )}
                <div className="blog-post__post-actions">
                  <div className="blog-post__post-actions__socials">
                    <TwitterShareButton
                      url={`${env('WEBSITE_URL')}${location.pathname}`}
                      className="react-share"
                    >
                      <PostAction iconType="small-twitter" message="Tweet" />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={`${env('WEBSITE_URL')}${location.pathname}`}
                      className="react-share"
                    >
                      <PostAction iconType="small-facebook" message="Share" />
                    </FacebookShareButton>
                    <PostAction
                      iconType="copy"
                      message="Copy Link"
                      onClick={onCopyLink}
                    />
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
