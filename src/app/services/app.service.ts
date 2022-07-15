import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_BASE ='http://localhost:8090/management/api/v1/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${API_BASE}/users`);
  }

  getUser(id: string){
    return this.http.get(`${API_BASE}/${id}`);    
  }

  createUser(usuario: any){
    return this.http.post(`${API_BASE}`, usuario);
  }

  updateUser(id: string, usuario: any){
    return this.http.put(`${API_BASE}/${id}`, usuario);
  }

  deleteUser(id:string){
    return this.http.delete(`${API_BASE}/${id}`);
  }
}
