import request from '../common/request/request';

export const login = data => request.post('/auth/login', data);

export const getUserList = params => request.get('/account/list', { params });

export const addUser = data => request.post('/account/user', data);
