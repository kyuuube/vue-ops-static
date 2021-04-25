import request from '../common/request/request';

export const addArticle = data => request.post('/article/create', data);
/**
 * 获取用户文章列表
 * @param params
 * @return function
 * */
export const getArticleList = params => request.get('/article/list,', { params });
