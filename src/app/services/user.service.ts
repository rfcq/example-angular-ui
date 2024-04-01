import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl ="http://localhost:8080/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/`);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/get-user/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/register-user`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update-user/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/all`);
  }
}