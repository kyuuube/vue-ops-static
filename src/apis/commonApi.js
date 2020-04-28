import request from '../common/request/request';

export const upload = () =>
    request.post('/upload', data, {
        headers: { Authorization: 'F0fGTlQuhoDxEd5CYiVXpIx7Pth73AxC', 'Content-Type': 'multipart/form-data' },
        baseURL: 'https://sm.ms/api/v2/'
    });
