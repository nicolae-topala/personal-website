import React from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';
import { BigThumbnail } from './atoms/BigThumbnail/BigThumbnail';
import { SmallThumbnail } from './atoms/SmallThumbnail/SmallThumbnail';

import './BlogPage.scss';

export const BlogPage = (): React.ReactElement => {
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
        <div className="blog__tweets"></div>
      </div>
    </Layout>
  );
};
