import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');

    const headers = new HttpHeaders({
      'token-usuario': 'xxxxx'
    });

    const reqClone = req.clone({
      headers
    })

    console.log('Paso por el interceptor');
    return next.handle(reqClone);
  }
}
