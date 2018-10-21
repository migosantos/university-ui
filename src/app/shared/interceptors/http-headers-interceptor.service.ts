import { HttpRequest, HttpInterceptor, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class HttpHeadersInterceptor implements HttpInterceptor {
 
  constructor() {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({  
        headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });
 
    return next.handle(authReq);
  }
}