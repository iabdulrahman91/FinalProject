import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private actionUrl : string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl;
   }

   public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }
}

