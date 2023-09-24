import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
<<<<<<< HEAD
  private apiUrl = 'https://of-info-get-4c3612417bd3.herokuapp.com'; 
=======
  private apiUrl = 'http://localhost:3000'; 
>>>>>>> ed5ee87 (change)

  constructor(private http: HttpClient) { }

  getData(location: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getContent/${location}`);
  }


}
