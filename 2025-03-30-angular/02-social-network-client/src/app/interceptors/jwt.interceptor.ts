import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQm9iIiwidXNlcm5hbWUiOiJib2IwMDAiLCJwYXNzd29yZCI6IjdmNzczN2ZkZGQyODQyYmMyYWZkYmYxODY4YWFhOGU5ODZiODMxMzNhMWYwMTBmZTk2NTM1YzE1ZTQ1ODQ2MjgiLCJjcmVhdGVkQXQiOiIyMDI1LTAzLTI1VDA5OjAxOjI2LjE5NFoiLCJmb2xsb3dpbmciOlsiNjdlMjhmZTUwODJjYTdmZmJmNDNiZDljIl0sImlkIjoiNjdlMjcwZTY4Nzk4ZmY3MjY3YjRlYTNmIiwiaWF0IjoxNzQzMzMxNDA0fQ.1gLje5Syn6aNUh0HjagjesH6eKiX6T-MVHw0Tvtwi4M'

    const reqWithJwt = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwt}`)
    }) 

    return next(reqWithJwt);
};
