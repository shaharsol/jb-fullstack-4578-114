import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJ1c2VybmFtZSI6ImFsaWNlMCIsInBhc3N3b3JkIjoiN2Y3NzM3ZmRkZDI4NDJiYzJhZmRiZjE4NjhhYWE4ZTk4NmI4MzEzM2ExZjAxMGZlOTY1MzVjMTVlNDU4NDYyOCIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMjVUMTE6MTM6NDEuOTEyWiIsImZvbGxvd2luZyI6W10sImlkIjoiNjdlMjhmZTUwODJjYTdmZmJmNDNiZDljIiwiaWF0IjoxNzQzMzM4ODk2fQ.a0OxMD_yz9ZCYiH4YqphMoBTe-0w4zZuwQMdbkSLS6A'

    const reqWithJwt = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwt}`)
    }) 

    return next(reqWithJwt);
};
