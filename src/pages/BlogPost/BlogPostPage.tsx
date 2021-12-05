import React, { useEffect, useState } from 'react';
import env from '@beam-australia/react-env';
import { useLocation, useParams } from 'react-router-dom';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

import { Posts } from 'libs/http/posts/posts.types';
import { posts as postsHttp } from 'libs/http/posts/posts';

import { Layout } from 'ui/organisms/Layout/Layout';
import { PostAction } from './atoms/PostAction/PostAction';

import './BlogPostPage.scss';

export const BlogPostPage: React.FC = (): React.ReactElement => {
  const [post, setPost] = useState<Posts>();

  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getPost = async () => {
      const { data } = await postsHttp.getPost(id);
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

  return (
    <Layout>
      <div className="blog-post">
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
      </div>
    </Layout>
  );
};
