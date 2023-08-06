import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://of-area-api-7edb2aeca382.herokuapp.com'; 

  constructor(private http: HttpClient) { }

  getData(location: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getContent/${location}`);
  }


}
