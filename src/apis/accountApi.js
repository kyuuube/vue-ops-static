import request from '../common/request/request';

export const login = (data) => request.post('/auth/login', data)
