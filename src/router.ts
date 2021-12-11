import { AboutPage } from 'pages/About/AboutPage';
import { AddBlogPostPage } from 'pages/AddBlogPost/AddBlogPostPage';
import { BlogPage } from 'pages/Blog/BlogPage';
import { BlogPostPage } from 'pages/BlogPost/BlogPostPage';
import { ContactPage } from 'pages/Contact/ContactPage';
import { LoginPage } from 'pages/Login/LoginPage';

export const routes = {
  allRoutes: [
    { path: '/about', exact: true, component: AboutPage },
    { path: '/blog', exact: true, component: BlogPage },
    { path: '/blog/add', exact: true, component: AddBlogPostPage },
    { path: '/blog/:id', exact: true, component: BlogPostPage },
    { path: '/contact', exact: true, component: ContactPage },
    { path: '/login', exact: true, component: LoginPage },
  ],
  defaultRoute: {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
};
