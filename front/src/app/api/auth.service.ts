import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor( private http:HttpClient , private router: Router) { }



  auth(credential:any){
    return this.http.post(`${this.apiUrl}/api/auth/signin`, credential);
  }

  createAccount(credential:any){
    return this.http.post(`${this.apiUrl}/api/auth/signup`, credential);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
