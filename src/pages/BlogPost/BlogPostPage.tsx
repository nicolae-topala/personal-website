import React from 'react';
import env from '@beam-australia/react-env';
import { useLocation } from 'react-router-dom';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

import { Layout } from 'ui/organisms/Layout/Layout';
import { PostAction } from './atoms/PostAction/PostAction';

import './BlogPostPage.scss';

export const BlogPostPage: React.FC = (): React.ReactElement => {
  const location = useLocation();

  const onCopyLink = (): void => {
    navigator.clipboard.writeText(`${env('WEBSITE_URL')}${location.pathname}`);
  };

  return (
    <Layout>
      <div className="blog-post">
        <img src="" className="blog-post__cover" alt="Blog Cover" />
        <div className="blog-post__title">Title</div>
        <div className="blog-post__date">Date</div>
        <div className="blog-post__post">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed mollis massa. Sed mollis hendrerit efficitur. Donec ante justo,
            pulvinar ut nisl sit amet, congue convallis sem. Nam tempus lorem in
            sodales viverra.
          </p>
        </div>
        <div className="blog-post__post-actions">
          <div className="blog-post__post-actions__socials">
            <TwitterShareButton
              url="http://twitter.com"
              className="react-share"
            >
              <PostAction iconType="small-twitter" message="Tweet" />
            </TwitterShareButton>
            <FacebookShareButton
              url="http://facebook.com"
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
      </div>
    </Layout>
  );
};
