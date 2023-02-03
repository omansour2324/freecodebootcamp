import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);
    const header = new HttpHeaders({'token':'1234sdsgs5'});
    const newRequest = request.clone({ headers: header });

    //you can use request.method to make special cases for POST vs GETs
    return next.handle(newRequest);
  }
}
