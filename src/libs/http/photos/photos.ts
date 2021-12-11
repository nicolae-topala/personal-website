import { axios } from 'libs/http/axios';
import { Photo } from './photo.types';

export const photos = {
  addPhoto: (data = {}): Promise<{ data: Photo }> =>
    axios.post('/photos/upload', data),
};
