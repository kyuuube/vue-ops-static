import request from '../common/request/request';

export const addArticle = data => request.post('/content/create', data);
