import request from '../../utils/request';

export const loginService = params => request.post("/auth/login", params)