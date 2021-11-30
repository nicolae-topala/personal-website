import { axios } from 'libs/http/axios';
import { Posts } from './posts.types';
import { Tweet } from './tweets.types';

export const posts = {
    getPosts: (): Promise<{data: Posts[]}> => axios.get('/posts'),
    getTweets: (id: string): Promise<{data: {data : Tweet[]}}> => axios.get(`/posts/tweets/${id}`),
};