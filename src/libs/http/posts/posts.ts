import { axios } from 'libs/http/axios';
import { Posts } from './posts.types';

export const posts = {
    getPosts: (): Promise<{data: Posts[]}> => axios.get('/posts'),
};